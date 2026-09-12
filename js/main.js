/**
 * main.js — Site bootstrap
 * Marks JS availability and initializes modules.
 */
(function () {
  "use strict";

  document.documentElement.classList.add("js-enabled");

  function init() {
    if (window.APNav && typeof window.APNav.init === "function") {
      window.APNav.init();
    }

    if (window.APContact && typeof window.APContact.init === "function") {
      window.APContact.init();
    }

    if (window.APAnimations && typeof window.APAnimations.init === "function") {
      window.APAnimations.init();
    }

    if (window.APHeroSkills && typeof window.APHeroSkills.init === "function") {
      window.APHeroSkills.init();
    }

    if (window.APProject && typeof window.APProject.init === "function") {
      window.APProject.init();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
