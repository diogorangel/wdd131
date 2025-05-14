// Date copyright
const yearSpan = document.getElementById("year");
const modified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modified.textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? '✖' : '☰';
});

document.getElementById("menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("show");

  // Alterna ícone entre ☰ e ✖
  const icon = document.getElementById("menu");
  icon.textContent = icon.textContent === "☰" ? "✖" : "☰";
});
