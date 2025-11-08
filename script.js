document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  if (!card) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Sens naturel : la carte suit le curseur
    const rotateY = ((x / rect.width) - 0.5) * -12; // moins violent pour grand format
    const rotateX = ((y / rect.height) - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});
