document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");

  if (!card) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Sens corrigé : la carte penche dans la direction du curseur
    const rotateY = ((x / rect.width) - 0.5) * -20; 
    const rotateX = ((y / rect.height) - 0.5) * 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Quand la souris quitte la carte → retour neutre
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});
