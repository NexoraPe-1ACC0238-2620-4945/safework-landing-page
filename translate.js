/* Static, same-origin translations. No API credentials or customer data. */
(() => {
  "use strict";
  const supported = new Set(["en", "es"]);
  let language = "en";
  let dictionary = {};
  let requestNumber = 0;
  const cache = new Map();
  const button = document.getElementById("language");
  const storageKey = "safework-language";
  try {
    const saved = localStorage.getItem(storageKey);
    if (supported.has(saved)) language = saved;
  } catch (_) {
    /* The English HTML fallback remains usable. */
  }

  function label(key, fallback = "") {
    return dictionary[key] ?? fallback;
  }

  async function applyLanguage(next) {
    if (!supported.has(next)) return;
    const currentRequest = ++requestNumber;
    button?.setAttribute("aria-busy", "true");
    try {
      if (!cache.has(next)) {
        const response = await fetch(`i18n/${next}.json`);
        if (!response.ok) throw new Error("Translation file unavailable");
        cache.set(next, await response.json());
      }
      if (currentRequest !== requestNumber) return;
      dictionary = cache.get(next);
      language = next;
      try {
        localStorage.setItem(storageKey, next);
      } catch (_) {
        /* Language switching also works when browser storage is disabled. */
      }
      document.documentElement.lang = next === "es" ? "es-419" : "en";
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = dictionary[element.dataset.i18n];
        if (typeof value === "string") element.textContent = value;
      });
      for (const name of ["alt", "aria-label"]) {
        document.querySelectorAll(`[data-i18n-${name}]`).forEach((element) => {
          const value = dictionary[element.getAttribute(`data-i18n-${name}`)];
          if (typeof value === "string") element.setAttribute(name, value);
        });
      }
      if (button) {
        button.textContent = next === "es" ? "ES / EN" : "EN / ES";
        button.setAttribute("aria-label", label("t6"));
        button.removeAttribute("aria-busy");
      }
      const proposal = document.querySelector(".plan-page");
      document.title = proposal
        ? label("plan.pageTitle")
        : next === "es"
          ? "SafeWork — Seguridad laboral desde tu celular"
          : "SafeWork — Workplace safety from your phone";
      document.querySelector('meta[name="description"]').content =
        next === "es"
          ? "SafeWork: app Android para reportar, atender y dar seguimiento a incidentes laborales. Un proyecto de NexoraPe."
          : "SafeWork: an Android app to report, handle and follow up on workplace incidents. A NexoraPe project.";
      document.dispatchEvent(
        new CustomEvent("safework:language", { detail: { language, label } }),
      );
    } catch (_) {
      if (currentRequest === requestNumber) {
        button?.removeAttribute("aria-busy");
        /* Keep the current readable language; never inject untrusted HTML. */
      }
    }
  }
  window.safeWorkLanguage = {
    get current() {
      return language;
    },
    label,
  };
  button?.addEventListener("click", () =>
    applyLanguage(language === "en" ? "es" : "en"),
  );
  applyLanguage(language);
})();
