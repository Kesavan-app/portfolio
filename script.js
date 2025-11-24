const text = document.querySelector(".text");
const words = ["web Developer", "UI/UX Designer", "Flutter Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentWord = words[wordIndex];
  let displayText = currentWord.substring(0, charIndex);

  text.innerHTML = displayText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 800);
  }
}

typeEffect();

// New function for footer icon click
function openLink(url) {
  window.open(url, "_blank"); // Opens in new tab
}

function handleDownload() {
  const confirmDownload = confirm("Do you want to download Kesavan's resume?");
  if (confirmDownload) {
    const link = document.createElement("a");
    link.href = "assets/kesavan_m_res_final.pdf"; // File path in your project
    link.download = "kesavan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// Attach click event in normal JS
document.getElementById("downloadBtn").addEventListener("click", handleDownload);

  // Get the current year
const currentYear = new Date().getFullYear();
// Set it inside the span
document.getElementById("year").textContent = currentYear;

/* ===== ✅ Hamburger Menu Script ===== */
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
});
