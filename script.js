// Sélectionne la carte
const card = document.querySelector('.card');

// Écoute le mouvement de la souris
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Calcule la rotation
  const rotateY = ((x / rect.width) - 0.5) * 20;
  const rotateX = ((y / rect.height) - 0.5) * -20;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

// Quand la souris sort → reset
card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});
