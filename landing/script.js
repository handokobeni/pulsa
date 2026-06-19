/* ===================================================================
   Stax landing — minimal vanilla JS
   - Scroll-triggered reveals (Intersection Observer)
   - Waitlist form submit (Formspree fetch, graceful fallback)
   =================================================================== */

(function () {
  "use strict";

  // ---------- 1. Reveal on scroll ----------
  function addRevealClass() {
    // Tag elements that should animate in. Keep this list tight.
    const selectors = [
      ".hero__copy > *",
      ".stax-visual",
      ".problem h2",
      ".problem .lede",
      ".problem__card",
      ".problem__closing",
      ".pillars .section__head > *",
      ".pillar",
      ".howto .section__head > *",
      ".step",
      ".proof .section__head > *",
      ".stat",
      ".quote",
      ".footer__cta > *"
    ];
    document.querySelectorAll(selectors.join(",")).forEach(function (el, i) {
      el.classList.add("reveal");
      // Stagger siblings within the same parent
      const indexWithinParent = Array.from(el.parentElement.children).indexOf(el);
      if (indexWithinParent > 0 && indexWithinParent < 5) {
        el.classList.add("reveal--delay-" + indexWithinParent);
      }
    });
  }

  function observe() {
    // Capture mode (for screenshots) and reduced-motion: show everything immediately
    const params = new URLSearchParams(window.location.search);
    const captureMode = params.get("capture") === "1";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (captureMode || reduceMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  }

  // ---------- 2. Waitlist form ----------
  function bindForm() {
    const form = document.getElementById("waitlistForm");
    if (!form) return;
    const success = form.querySelector(".waitlist__success");
    const submitBtn = form.querySelector("button[type='submit']");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const action = form.getAttribute("action") || "";

      // If Formspree endpoint hasn't been configured yet, show success preview locally
      const isPlaceholder = action.indexOf("REPLACE_WITH_YOUR_ID") !== -1 || !action;

      const showSuccess = function () {
        Array.from(form.elements).forEach(function (el) {
          if (el.tagName !== "BUTTON") el.disabled = true;
        });
        if (submitBtn) submitBtn.disabled = true;
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      };

      if (isPlaceholder) {
        // Local-only confirmation; user must wire up Formspree before deploying.
        showSuccess();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Mengirim...";
      }

      fetch(action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      }).then(function (res) {
        if (res.ok) {
          showSuccess();
        } else {
          throw new Error("Submission failed");
        }
      }).catch(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Coba lagi";
        }
        alert("Maaf, ada gangguan. Coba kirim ulang dalam beberapa detik.");
      });
    });
  }

  // ---------- 3. Init ----------
  document.addEventListener("DOMContentLoaded", function () {
    addRevealClass();
    observe();
    bindForm();
  });
})();
