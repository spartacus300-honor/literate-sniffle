const year = document.querySelector("#year");
const themeToggle = document.querySelector("#themeToggle");
const revealElements = document.querySelectorAll(".reveal");

year.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
});

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