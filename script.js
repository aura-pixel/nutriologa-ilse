// ==========================
// NAV SCROLL EFFECT
// ==========================
const nav = document.querySelector(".nav-pill");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255,255,255,0.95)";
    nav.style.boxShadow = "0 10px 35px rgba(0,0,0,0.12)";
  } else {
    nav.style.background = "rgba(255,255,255,0.75)";
    nav.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
  }
});


// ==========================
// MENU MOBILE
// ==========================
const toggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

if (toggle) {
  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggle.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    toggle.textContent = "☰";
  });
});


// ==========================
// ANIMACIONES ENTRADA (REUTILIZABLE)
// ==========================
function animateCards(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    setTimeout(() => {
      el.style.transition = "0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, i * 150);
  });
}

animateCards(".conexion-card");
animateCards(".metodo-card");
animateCards(".especialidad-card");


// ==========================
// TESTIMONIOS SLIDER
// ==========================
const testimonios = document.querySelectorAll(".testimonio");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {
  testimonios.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  testimonios[i]?.classList.add("active");
  dots[i]?.classList.add("active");
}

// Click dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

// Auto slide
setInterval(() => {
  index = (index + 1) % testimonios.length;
  showSlide(index);
}, 5000);


// ==========================
// LOTTIE ANIMATIONS
// ==========================
function loadLottie(id, path) {
  const container = document.getElementById(id);

  if (!container) return;

  lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path
  });
}

loadLottie("lottie-sport", "lottie/Sport.json");
loadLottie("lottie-gut", "lottie/gut.json");
loadLottie("lottie-hormonal", "lottie/hormonal.json");


// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    const offset = 100;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  });
});


// ==========================
// ACTIVE LINK (NAV + FOOTER)
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const footerLinks = document.querySelectorAll(".footer-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  [...navLinks, ...footerLinks].forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href")?.includes(current)) {
      link.classList.add("active");
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

function loadLottieControlled(id, path) {
  const container = document.getElementById(id);
  if (!container) return;

  const anim = lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path
  });

  container.addEventListener("mouseenter", () => anim.play());
  container.addEventListener("mouseleave", () => anim.stop());
}

