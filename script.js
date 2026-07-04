const year = document.querySelector("#year");
const revealElements = document.querySelectorAll(".reveal");

const music = document.querySelector("#backgroundMusic");
const musicToggle = document.querySelector("#musicToggle");

const galleryItems = document.querySelectorAll(".gallery-item");
const imageModal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
const modalClose = document.querySelector("#modalClose");

year.textContent = new Date().getFullYear();

const topBar = document.querySelector(".top-bar");

function updateTopbarHeight() {
  if (!topBar) return;
  document.documentElement.style.setProperty("--topbar-height", `${topBar.offsetHeight}px`);
}

updateTopbarHeight();
window.addEventListener("resize", updateTopbarHeight);

let musicEnabled = localStorage.getItem("musicEnabled") === "true";

function updateMusicButton() {
  musicToggle.textContent = musicEnabled ? "Music: On" : "Music: Off";
}

async function playMusic() {
  try {
    music.volume = 0.35;
    await music.play();
  } catch {
    musicEnabled = false;
    localStorage.setItem("musicEnabled", "false");
  }

  updateMusicButton();
}

function stopMusic() {
  music.pause();
  music.currentTime = 0;
  updateMusicButton();
}

musicToggle.addEventListener("click", () => {
  musicEnabled = !musicEnabled;
  localStorage.setItem("musicEnabled", String(musicEnabled));

  if (musicEnabled) {
    playMusic();
  } else {
    stopMusic();
  }
});

updateMusicButton();

if (musicEnabled) {
  playMusic();
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => observer.observe(element));

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const fullImage = item.dataset.full;
    modalImage.src = fullImage;
    imageModal.classList.add("open");
    imageModal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

modalClose.addEventListener("click", closeModal);

imageModal.addEventListener("click", event => {
  if (event.target === imageModal) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && imageModal.classList.contains("open")) {
    closeModal();
  }
});