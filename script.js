const homeScreen = document.getElementById("home-screen");
const cardContainer = document.getElementById("card-container");
const card = document.querySelector(".card");
const music = document.getElementById("music");

// ➤ CLICK SUR TOUTE LA PAGE D'ACCUEIL
homeScreen.addEventListener("click", () => {
    homeScreen.style.opacity = "0";
    homeScreen.style.transform = "scale(0.9)";

    setTimeout(() => {
        homeScreen.style.display = "none";
        cardContainer.classList.remove("hidden");
        setTimeout(() => {
            cardContainer.classList.add("show");
        }, 20);
    }, 500);

    music.play().catch(() => {
        console.log("Autoplay bloqué, joué après interaction.");
    });
});

// ➤ TILT 3D FLUIDE ET PROFOND
// ============================
// TILT 3D ULTRA FLUID
// ============================
let targetRotX = 0;
let targetRotY = 0;

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - (rect.left + rect.width / 2);
  const y = e.clientY - (rect.top + rect.height / 2);

  const percentX = x / (rect.width / 2);
  const percentY = y / (rect.height / 2);

  // intensité + profondeur
  targetRotY = percentX * 10;  // + profond et + rapide
  targetRotX = -percentY * 10;
});

card.addEventListener("mouseleave", () => {
  targetRotX = 0;
  targetRotY = 0;
});

// animation ultra smooth
function animateTilt() {
  let currentX = parseFloat(card.dataset.rotX || 0);
  let currentY = parseFloat(card.dataset.rotY || 0);

  // interpolation fluide
  currentX += (targetRotX - currentX) * 0.05;
  currentY += (targetRotY - currentY) * 0.05;

  card.dataset.rotX = currentX;
  card.dataset.rotY = currentY;

  card.style.transform =
    `perspective(1200px)
     rotateX(${currentX}deg)
     rotateY(${currentY}deg)
     scale(1)`; // scale neutre, pas d'étirement

  requestAnimationFrame(animateTilt);
}

animateTilt();
