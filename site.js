(() => {
  "use strict";
  document.documentElement.classList.add("js");
  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");
  const language = () => window.safeWorkLanguage?.current ?? "en";
  const translate = (key, fallback) =>
    window.safeWorkLanguage?.label(key, fallback) ?? fallback;

  function setMenu(open, focus = false) {
    menu?.setAttribute("aria-expanded", String(open));
    menu?.setAttribute(
      "aria-label",
      translate(open ? "menu.close" : "t8", open ? "Close menu" : "Open menu"),
    );
    nav?.classList.toggle("open", open);
    if (focus) menu?.focus();
  }
  menu?.addEventListener("click", () =>
    setMenu(menu.getAttribute("aria-expanded") !== "true"),
  );
  nav
    ?.querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menu?.getAttribute("aria-expanded") === "true"
    )
      setMenu(false, true);
  });
  const mobile = window.matchMedia("(max-width: 900px)");
  mobile.addEventListener("change", () => setMenu(false));

  const screens = {
    incidents: {
      src: "assets/screens/incidents.png",
      label: "t37",
      caption: "t49",
    },
    notifications: {
      src: "assets/screens/notifications.png",
      label: "t38",
      caption: "screen.notifications",
    },
  };
  let screen = "incidents";
  let step = 0;
  const steps = [
    { title: "t56", description: "t67", state: "t65" },
    { title: "t57", description: "flow.assigned", state: "state.assigned" },
    { title: "t58", description: "flow.started", state: "state.started" },
    { title: "t59", description: "flow.closed", state: "state.closed" },
  ];
  function renderScreen() {
    const image = document.getElementById("product-screen");
    if (!image) return;
    image.src = screens[screen].src;
    image.alt = translate(screens[screen].label, screen);
    document.getElementById("screen-caption").textContent = translate(
      screens[screen].caption,
      screen,
    );
    document.querySelectorAll("[data-screen]").forEach((button) => {
      const selected = button.dataset.screen === screen;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }
  function renderStep() {
    const detail = document.getElementById("flow-detail");
    if (!detail) return;
    const current = steps[step];
    detail.querySelector("#flow-title").textContent = translate(current.title);
    detail.querySelector("#flow-description").textContent = translate(
      current.description,
    );
    detail.querySelector("#flow-state").textContent = translate(current.state);
    detail.querySelector(".flow-watermark").textContent = String(
      step + 1,
    ).padStart(2, "0");
    document.querySelectorAll("[data-step]").forEach((button) => {
      const selected = Number(button.dataset.step) === step;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }
  document.querySelectorAll("[data-screen]").forEach((button) =>
    button.addEventListener("click", () => {
      if (!screens[button.dataset.screen]) return;
      screen = button.dataset.screen;
      renderScreen();
    }),
  );
  document.querySelectorAll("[data-step]").forEach((button) =>
    button.addEventListener("click", () => {
      step = Number(button.dataset.step);
      renderStep();
    }),
  );
  document.addEventListener("safework:language", () => {
    setMenu(menu?.getAttribute("aria-expanded") === "true");
    renderScreen();
    renderStep();
  });
  if (translate("t14")) {
    renderScreen();
    renderStep();
  }
})();
