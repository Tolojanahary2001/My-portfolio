const texts = ["Développeur Front-end", "Web Designer UI/UX", "Intégrateur"];
let index = 0; 
let charIndex = 0;
let isDeleting = false;

const typedTextEl = document.getElementById("typedText");

function typeEffect() {
  const currentText = texts[index];

  if (!isDeleting && charIndex <= currentText.length) {
    typedTextEl.textContent = currentText.substring(0, charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex >= 0) {
    typedTextEl.textContent = currentText.substring(0, charIndex);
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % texts.length;
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
