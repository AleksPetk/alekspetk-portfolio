/**
 * animations.js — Optional IntersectionObserver reveal foundation
 * Respects prefers-reduced-motion. Keep effects minimal.
 */
(function () {
  "use strict";

  function prefersReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function init() {
    var nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      nodes.forEach(function (node) {
        node.classList.add("is-revealed");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      }
    );

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  window.APAnimations = { init: init };
})();
