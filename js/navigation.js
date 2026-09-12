/**
 * navigation.js — Mobile nav, sticky header scroll state, Resume menu
 */
(function () {
  "use strict";

  var SCROLL_THRESHOLD = 12;

  function getElements() {
    return {
      header: document.querySelector("[data-site-header]"),
      toggle: document.querySelector("[data-nav-toggle]"),
      nav: document.querySelector("[data-nav]"),
      resumeRoot: document.querySelector("[data-resume-menu]"),
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

  function getResumeParts(root) {
    if (!root) return null;
    return {
      root: root,
      toggle: root.querySelector("[data-resume-toggle]"),
      panel: root.querySelector("[data-resume-panel]"),
    };
  }

  function isResumeOpen(parts) {
    return parts && parts.toggle && parts.toggle.getAttribute("aria-expanded") === "true";
  }

  function closeResume(parts) {
    if (!parts || !parts.toggle || !parts.panel) return;
    parts.toggle.setAttribute("aria-expanded", "false");
    parts.panel.hidden = true;
  }

  function openResume(parts) {
    if (!parts || !parts.toggle || !parts.panel) return;
    if (window.APContact && typeof window.APContact.closeMail === "function") {
      window.APContact.closeMail();
    }
    parts.toggle.setAttribute("aria-expanded", "true");
    parts.panel.hidden = false;
  }

  function initResumeMenu(els) {
    var parts = getResumeParts(els.resumeRoot);
    if (!parts || !parts.toggle || !parts.panel) return;

    parts.toggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (isResumeOpen(parts)) {
        closeResume(parts);
      } else {
        openResume(parts);
      }
    });

    parts.panel.addEventListener("click", function (event) {
      event.stopPropagation();
      var link = event.target && event.target.closest && event.target.closest("a");
      if (link) {
        closeResume(parts);
        closeNav(els.toggle, els.nav);
      }
    });

    document.addEventListener("click", function (event) {
      if (!isResumeOpen(parts)) return;
      if (parts.root.contains(event.target)) return;
      if (event.target && event.target.closest && event.target.closest("[data-resume-open]")) {
        return;
      }
      closeResume(parts);
    });

    document.querySelectorAll("[data-resume-open]").forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (
          window.matchMedia("(max-width: 767px)").matches &&
          els.toggle &&
          els.nav
        ) {
          openNav(els.toggle, els.nav);
        }
        openResume(parts);
        if (parts.toggle) {
          parts.toggle.focus();
        }
      });
    });
  }

  function init() {
    var els = getElements();
    if (!els.header && !els.toggle) return;

    setScrolled(els.header);
    initResumeMenu(els);
    var resumeParts = getResumeParts(els.resumeRoot);

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

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (isResumeOpen(resumeParts)) {
        closeResume(resumeParts);
        if (resumeParts.toggle) resumeParts.toggle.focus();
        return;
      }
      closeNav(els.toggle, els.nav);
    });

    if (els.toggle && els.nav) {
      els.toggle.addEventListener("click", function () {
        var expanded = els.toggle.getAttribute("aria-expanded") === "true";
        if (expanded) {
          closeNav(els.toggle, els.nav);
          closeResume(resumeParts);
        } else {
          openNav(els.toggle, els.nav);
        }
      });

      els.nav.addEventListener("click", function (event) {
        var target = event.target;
        if (
          target &&
          target.closest &&
          target.closest("a") &&
          !target.closest("[data-resume-panel]")
        ) {
          closeNav(els.toggle, els.nav);
          closeResume(resumeParts);
        }
      });

      window.addEventListener("resize", function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          closeNav(els.toggle, els.nav);
        }
      });
    }

    window.APNav.closeResume = function () {
      closeResume(resumeParts);
    };
    window.APNav.openResume = function () {
      openResume(resumeParts);
    };
  }

  window.APNav = { init: init };
})();
