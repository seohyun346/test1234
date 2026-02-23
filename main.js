const STORAGE_KEY = "theme";
const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");

function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggleButton.textContent = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
}

function toggleTheme() {
  const current = root.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEY, next);
  applyTheme(next);
}

applyTheme(getPreferredTheme());
toggleButton.addEventListener("click", toggleTheme);
