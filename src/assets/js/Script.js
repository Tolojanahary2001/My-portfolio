document.addEventListener("DOMContentLoaded", function () {
    // === 1. Activation effet AOS ===
    AOS.init({
        duration: 800,
        once: true
    });

    // === 2. Script pour changer fa-regular en fa-solid pour le lien actif ===
    const navLinks = document.querySelectorAll('.nav-link');
    function updateIcons() {
        navLinks.forEach(link => {
            const icon = link.querySelector('i');
            if (!icon) return;

            if (link.classList.contains('active')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });
    }
    document.addEventListener('scroll', updateIcons);

    // === 3. Effet texte tapé ===
    const texts = ["Développeur Front-end", "Web Designer UI/UX", "Intégrateur"];
    let index = 0, charIndex = 0, isDeleting = false;
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
    typeEffect();

    // === 4. Animation des barres de progression ===
    function animateProgressBars() {
        const section = document.querySelector("#technologie");
        const bars = section.querySelectorAll(".progress-bar");
        let sectionVisible = false;

        function isInViewport(el) {
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        }

        function triggerAnimation() {
            if (sectionVisible) return;
            if (isInViewport(section)) {
                sectionVisible = true;
                bars.forEach(bar => {
                    const target = parseInt(bar.getAttribute("data-percentage"));
                    bar.style.transition = "width 2.5s ease-in-out";
                    bar.style.width = target + "%";
                    bar.setAttribute("aria-valuenow", target);
                });
            }
        }

        document.addEventListener("scroll", triggerAnimation);
        window.addEventListener("load", triggerAnimation);
    }
    animateProgressBars();

    // === 5. Scroll nav-link activation ===
    // === Scroll nav-link activation ===
function updateActiveNav() {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const menuItems = document.querySelectorAll('nav .nav-link');
    menuItems.forEach(item => item.classList.remove('active'));
  
    const isInSection = (sectionId) => {
      const section = document.querySelector(sectionId);
      if (!section) return false;
      const sectionTop = section.offsetTop - 80; // ajuster si nécessaire
      const sectionBottom = sectionTop + section.offsetHeight;
      return scrollPos >= sectionTop && scrollPos < sectionBottom;
    };
  
    if (isInSection('#hero')) {
      document.querySelectorAll('nav a[href="#hero"]').forEach(link => link.classList.add('active'));
    } else if (isInSection('#about')) {
      document.querySelectorAll('nav a[href="#about"]').forEach(link => link.classList.add('active'));
    } else if (isInSection('#portfolio')) {
      document.querySelectorAll('nav a[href="#portfolio"]').forEach(link => link.classList.add('active'));
    } else if (isInSection('#technologie')) {
      document.querySelectorAll('nav a[href="#technologie"]').forEach(link => link.classList.add('active'));
    } else if (isInSection('#contact')) {
      document.querySelectorAll('nav a[href="#contact"]').forEach(link => link.classList.add('active'));
    } else {
      // fallback si besoin
      // document.querySelectorAll('nav a[href="#"]').forEach(link => link.classList.add('active'));
    }
  
    // mets à jour aussi les icônes pour correspondre aux classes active
    updateIcons();
  }
  
  // exécuter sur scroll (passive pour perf), sur load et immédiat après DOM ready
  document.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('load', updateActiveNav);
  updateActiveNav(); // <-- CET APPEL fait que "Home" sera actif dès le chargement
  
});



// Scroller popup
const scrollers = document.querySelectorAll(".scroller");
const popup = document.getElementById("popup");
const closePopup = document.querySelector(".closePopup");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const track = scroller.querySelector(".scroller__inner");
        const items = Array.from(track.children);

        // Dupliquer les éléments
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        // Délégation des clics
        track.addEventListener("click", (e) => {
            const card = e.target.closest(".showPopup");
            if (!card) return;

            // === Remplir le popup dynamiquement ===
            const title = card.dataset.title;
            const tasks = JSON.parse(card.dataset.tasks || "[]");
            const tech = JSON.parse(card.dataset.tech || "[]");

            // Titre
            popup.querySelector(".titleProjet").textContent = title;

            // Tâches
            const taskList = popup.querySelector(".taskList");
            taskList.innerHTML = tasks.map(t => `
                <li class="col-md-3 col-6">
                    <img src="${t.icon}" width="40" alt="">${t.label}
                </li>
            `).join("");

            // Techno
            const techLists = popup.querySelectorAll(".techList");
            techLists[0].innerHTML = tech
              .slice(0, 3)
              .map(t => `<li><img src="${t.icon}" width="${t.width}" alt=""></li>`)
              .join("");

            techLists[1].innerHTML = tech
              .slice(3)
              .map(t => `<li><img src="${t.icon}" width="${t.width}" alt=""></li>`)
              .join("");

            // Affiche le popup et stoppe le scroll
            popup.classList.add("active");
            scroller.classList.add("paused");
        });
    });
}

// === Fermeture du popup ===
closePopup?.addEventListener("click", () => {
    popup.classList.remove("active");
    scrollers.forEach(s => s.classList.remove("paused"));
});

popup?.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("active");
        scrollers.forEach(s => s.classList.remove("paused"));
    }
});


// formspree 
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Empêche l'envoi classique

    const formData = new FormData(form);

    try {
        const response = await fetch("https://formspree.io/f/xyzplzln", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Formulaire envoyé avec succès
            form.style.display = "none";         // Masquer le formulaire
            formMessage.style.display = "block"; // Afficher ton message
            form.reset();
        } else {
            const data = await response.json();
            alert("Erreur : " + (data.errors ? data.errors.map(e => e.message).join(", ") : "Merci de réessayer."));
        }
    } catch (error) {
        alert("Erreur lors de l'envoi. Merci de réessayer.");
        console.error(error);
    }
});
