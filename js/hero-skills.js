/**
 * hero-skills.js — Lower-hero skill ribbon (L→R curved carousel).
 * Continuous seamless loop; no random spawn/drift. Respects reduced motion.
 *
 * Architecture:
 *   .hero__skills        — fixed placement inside the hero (layout only)
 *   .hero__skills-track  — measured local coordinate system + overflow mask
 *   .hero-skill          — transforms relative to the track only
 *
 * Measures track client size (not scrollY / getBoundingClientRect) and
 * remeasures on ResizeObserver / visibility / fonts so anchor loads match
 * a normal top-of-page load.
 */
(function () {
  "use strict";

  var SKILLS = [
    "Python",
    "Django",
    "React",
    "TypeScript",
    "Docker",
    "Nginx",
    "PostgreSQL",
    "Redis",
    "JavaScript",
    "Vite",
    "Git",
    "Stripe",
    "OAuth",
    "REST API",
  ];

  var COLORS = ["#e8eef8", "#c5d4ec", "#b8a8d4", "#d0dcec"];
  var BRIGHT = "#f4f7fc";

  var hero = null;
  var band = null;
  var nodes = [];
  var rafId = 0;
  var running = false;
  var progress = 0;
  var lastTs = 0;
  var bandW = 0;
  var bandH = 0;
  var resizeObserver = null;

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function clearBand() {
    nodes = [];
    if (band) band.innerHTML = "";
  }

  function createWordEl(word, index) {
    var el = document.createElement("span");
    el.className = "hero-skill";
    el.setAttribute("aria-hidden", "true");
    el.textContent = word;

    var accent = index % 5 === 2;
    el.style.color = accent ? BRIGHT : COLORS[index % COLORS.length];
    if (accent) el.classList.add("hero-skill--accent");

    // Depth variation: opacity + slight scale (set as base; motion updates scale)
    var depth = 0.28 + ((index * 17) % 7) * 0.025;
    if (accent) depth = Math.min(0.45, depth + 0.08);

    band.appendChild(el);
    return {
      el: el,
      index: index,
      baseOpacity: depth,
      baseScale: accent ? 1.06 : 0.92 + ((index % 4) * 0.04),
    };
  }

  /** How many words should feel “on screen” at once */
  function visibleTarget() {
    var w = window.innerWidth;
    if (w < 768) return 2.4;
    if (w < 1024) return 3.2;
    return 3.8;
  }

  /**
   * Fixed roller-coaster track across the band (local band coordinates).
   * Words ride this path as they travel left → right.
   */
  function pathY(x, width, height) {
    var xNorm = width > 0 ? x / width : 0;
    var mid = height * 0.5;
    var amp = height * 0.42;
    return (
      mid +
      Math.sin(xNorm * Math.PI * 2.15) * amp * 0.72 +
      Math.sin(xNorm * Math.PI * 4.3 + 0.4) * amp * 0.32
    );
  }

  function measure() {
    if (!band) return false;
    // clientWidth/Height are layout-local to the track — independent of scrollY
    var nextW = band.clientWidth;
    var nextH = band.clientHeight;
    if (nextW < 1 || nextH < 1) return false;
    bandW = nextW;
    bandH = nextH;
    return true;
  }

  function layoutStatic() {
    if (!measure()) return;
    clearBand();
    var picks = [SKILLS[0], SKILLS[2], SKILLS[4]];
    var i;
    for (i = 0; i < picks.length; i += 1) {
      var item = createWordEl(picks[i], i);
      var x = bandW * (0.18 + i * 0.26);
      var y = pathY(x, bandW, bandH);
      item.el.style.opacity = String(item.baseOpacity);
      item.el.style.transform =
        "translate3d(" +
        x.toFixed(1) +
        "px, " +
        y.toFixed(1) +
        "px, 0) translate(-50%, -50%) scale(" +
        item.baseScale.toFixed(3) +
        ")";
    }
  }

  function buildTrack() {
    clearBand();
    var i;
    for (i = 0; i < SKILLS.length; i += 1) {
      nodes.push(createWordEl(SKILLS[i], i));
    }
  }

  function paint(dt) {
    if (!nodes.length || !bandW || !bandH) return;

    // ~35% slower than prior ribbon speed; continuous modulo loop
    var speed = 0.01;
    progress = (progress + dt * speed) % 1;

    var visible = visibleTarget();
    // Wider spacing: pack against nearly full band width
    var showW = bandW * 0.96;
    var travel = showW * (SKILLS.length / visible);
    var pad = bandW * 0.12;
    var total = travel + pad * 2;

    var i;
    var item;
    var t;
    var x;
    var y;
    var scale;
    var opacity;
    var edge;
    var xNorm;

    for (i = 0; i < nodes.length; i += 1) {
      item = nodes[i];
      t = (i / nodes.length + progress) % 1;
      x = -pad + t * total;
      y = pathY(x, bandW, bandH);
      xNorm = bandW > 0 ? x / bandW : 0;

      // Soft left entry; right fade only near the far edge
      edge = 1;
      if (x < bandW * 0.05) edge = Math.max(0, x / (bandW * 0.05));
      else if (x > bandW * 0.93) {
        edge = Math.max(0, (bandW - x) / (bandW * 0.07));
      }

      scale = item.baseScale * (1 + Math.sin(xNorm * Math.PI * 2) * 0.045);
      opacity = item.baseOpacity * edge;

      item.el.style.opacity = String(opacity);
      item.el.style.transform =
        "translate3d(" +
        x.toFixed(2) +
        "px, " +
        y.toFixed(2) +
        "px, 0) translate(-50%, -50%) scale(" +
        scale.toFixed(3) +
        ")";
    }
  }

  function tick(ts) {
    if (!running) return;
    if (!lastTs) lastTs = ts;
    var dt = Math.min(0.05, (ts - lastTs) / 1000);
    lastTs = ts;
    paint(dt);
    rafId = window.requestAnimationFrame(tick);
  }

  function start() {
    if (running) return;
    if (!measure()) return;
    if (!nodes.length) buildTrack();
    running = true;
    lastTs = 0;
    paint(0);
    rafId = window.requestAnimationFrame(tick);
  }

  function stop() {
    running = false;
    if (rafId) window.cancelAnimationFrame(rafId);
    rafId = 0;
    lastTs = 0;
  }

  function syncLayout() {
    if (!measure()) return;
    if (prefersReducedMotion()) {
      layoutStatic();
      return;
    }
    if (!nodes.length) buildTrack();
    paint(0);
    if (!running && !document.hidden) start();
  }

  function onResize() {
    syncLayout();
  }

  function scheduleMeasure() {
    // Double rAF: wait for layout + scroll restoration / hash jump
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(syncLayout);
    });
  }

  function init() {
    hero = document.querySelector(".hero");
    if (!hero) return;

    band = hero.querySelector("[data-hero-skills]");
    if (!band) return;

    if (prefersReducedMotion()) {
      hero.classList.add("hero--skills-static");
      scheduleMeasure();
      window.addEventListener("resize", onResize);
      return;
    }

    buildTrack();
    scheduleMeasure();

    if (!document.hidden) {
      // Start after first layout pass so bandW/bandH match the hero track
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          if (!document.hidden) start();
        });
      });
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else start();
    });

    window.addEventListener("resize", onResize);

    // bfcache / back-forward / hash restoration
    window.addEventListener("pageshow", scheduleMeasure);
    window.addEventListener("hashchange", scheduleMeasure);

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(function () {
        syncLayout();
      });
      resizeObserver.observe(band);
    }

    // Remeasure when the hero is actually on screen (anchor loads, AP return)
    if (typeof IntersectionObserver !== "undefined") {
      var io = new IntersectionObserver(
        function (entries) {
          var i;
          for (i = 0; i < entries.length; i += 1) {
            if (entries[i].isIntersecting) {
              syncLayout();
              break;
            }
          }
        },
        { root: null, threshold: 0.01 }
      );
      io.observe(hero);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        scheduleMeasure();
      });
    }
  }

  window.APHeroSkills = { init: init };
})();
