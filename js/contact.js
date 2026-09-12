/**
 * contact.js — Get In Touch email-app chooser (homepage Contact)
 */
(function () {
  "use strict";

  function getParts(root) {
    if (!root) return null;
    return {
      root: root,
      toggle: root.querySelector("[data-mail-toggle]"),
      panel: root.querySelector("[data-mail-panel]"),
    };
  }

  function isOpen(parts) {
    return (
      parts &&
      parts.toggle &&
      parts.toggle.getAttribute("aria-expanded") === "true"
    );
  }

  function closeMail(parts) {
    if (!parts || !parts.toggle || !parts.panel) return;
    parts.toggle.setAttribute("aria-expanded", "false");
    parts.panel.hidden = true;
  }

  function openMail(parts) {
    if (!parts || !parts.toggle || !parts.panel) return;
    if (window.APNav && typeof window.APNav.closeResume === "function") {
      window.APNav.closeResume();
    }
    parts.toggle.setAttribute("aria-expanded", "true");
    parts.panel.hidden = false;
  }

  function init() {
    var parts = getParts(document.querySelector("[data-mail-menu]"));
    if (!parts || !parts.toggle || !parts.panel) return;

    parts.toggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (isOpen(parts)) {
        closeMail(parts);
      } else {
        openMail(parts);
      }
    });

    parts.panel.addEventListener("click", function (event) {
      event.stopPropagation();
      var link = event.target && event.target.closest && event.target.closest("a");
      if (link) {
        closeMail(parts);
      }
    });

    document.addEventListener("click", function (event) {
      if (!isOpen(parts)) return;
      if (parts.root.contains(event.target)) return;
      closeMail(parts);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (!isOpen(parts)) return;
      closeMail(parts);
      parts.toggle.focus();
    });

    window.APContact.closeMail = function () {
      closeMail(parts);
    };
  }

  window.APContact = {
    init: init,
    closeMail: function () {},
  };
})();
