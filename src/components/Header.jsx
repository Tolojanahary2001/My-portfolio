import { useEffect } from "react";
import "../assets/css/Header.css";

function Header() {

  useEffect(() => {
    function updateIcons() {
      const navLinks = document.querySelectorAll('.nav-link');
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

    function updateActiveNav() {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      const menuItems = document.querySelectorAll('nav .nav-link');
      menuItems.forEach(item => item.classList.remove('active'));

      const isInSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (!section) return false;
        const sectionTop = section.offsetTop - 80; // marge d’activation
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
      }

      // 🔁 Met à jour les icônes après chaque changement d'état
      updateIcons();
    }

    // ✅ Un seul scroll listener
    document.addEventListener('scroll', updateActiveNav, { passive: true });
    window.addEventListener('load', updateActiveNav);
    updateActiveNav(); // Active la bonne icône dès le chargement

    // 🧹 Nettoyage à la destruction du composant
    return () => {
      document.removeEventListener('scroll', updateActiveNav);
      window.removeEventListener('load', updateActiveNav);
    };
  }, []);

  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container justify-content-center">
        <div className="navbar-nav">
          <a className="nav-link home active" href="#hero" aria-current="page">
            <i className="fa-regular fa-house"></i>
          </a>
          <a className="nav-link about" href="#about">
            <i className="fa-regular fa-user"></i>
          </a>
          <a className="nav-link technologies" href="#technologie">
            <i className="fa-regular fa-heart"></i>
          </a>
          <a className="nav-link portfolio" href="#portfolio">
            <i className="fa-regular fa-folder-open"></i>
          </a>
          <a className="nav-link contact" href="#contact">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
