/**
 * navigation.js — Mobile nav + sticky header scroll state
 */
(function () {
  "use strict";

  var SCROLL_THRESHOLD = 12;

  function getElements() {
    return {
      header: document.querySelector("[data-site-header]"),
      toggle: document.querySelector("[data-nav-toggle]"),
      nav: document.querySelector("[data-nav]"),
    };
  }

  function setScrolled(header) {
    if (!header) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  function closeNav(toggle, nav) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  function openNav(toggle, nav) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    document.body.classList.add("nav-open");
  }

  function init() {
    var els = getElements();
    if (!els.header && !els.toggle) return;

    setScrolled(els.header);

    var ticking = false;
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
          setScrolled(els.header);
          ticking = false;
        });
      },
      { passive: true }
    );

    if (els.toggle && els.nav) {
      els.toggle.addEventListener("click", function () {
        var expanded = els.toggle.getAttribute("aria-expanded") === "true";
        if (expanded) {
          closeNav(els.toggle, els.nav);
        } else {
          openNav(els.toggle, els.nav);
        }
      });

      els.nav.addEventListener("click", function (event) {
        var target = event.target;
        if (target && target.closest && target.closest("a")) {
          closeNav(els.toggle, els.nav);
        }
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeNav(els.toggle, els.nav);
        }
      });

      window.addEventListener("resize", function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          closeNav(els.toggle, els.nav);
        }
      });
    }
  }

  window.APNav = { init: init };
})();
