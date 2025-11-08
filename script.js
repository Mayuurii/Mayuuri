// Petit effet d'apparition smooth
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".card").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".card").style.transition = "opacity 1s";
    document.querySelector(".card").style.opacity = "1";
  }, 300);
});
