/* === INTRO CLICK === */
const intro = document.getElementById("intro");

// Fade + remove
intro.addEventListener("click", () => {
  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
  }, 600);
});


/* === CARD 3D === */
const card = document.getElementById('card');
const MAX_ROT = 20;
const SCALE = 1.05;

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const x = e.clientX - centerX;
  const y = e.clientY - centerY;

  const percentX = x / (rect.width / 2);
  const percentY = y / (rect.height / 2);

  const rotateY = percentX * MAX_ROT;
  const rotateX = -percentY * MAX_ROT;

  card.style.transform = `
    perspective(800px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(${SCALE})
  `;
  card.style.transition = 'transform 0.05s ease-out';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = `
    perspective(800px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;
  card.style.transition = 'transform 0.3s ease';
});
