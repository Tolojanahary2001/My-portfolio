import React, { useEffect } from "react";
import '../assets/css/Portfolio.css';
import closeIcon from '../assets/img/icons/close.svg';
import designIcon from '../assets/img/icons/design-icon.svg';
import integrationIcon from '../assets/img/icons/integration-icon.svg';
import performanceIcon from '../assets/img/icons/performance-icon.svg';
import accessIcon from '../assets/img/icons/accessiblity-icon.svg';
import phpIcon from '../assets/img/icons/php.png';
import reactIcon from '../assets/img/icons/react.png';
import illustratorIcon from '../assets/img/icons/illustrator.png';
import htmlIcon from '../assets/img/icons/html.svg';
import cssIcon from '../assets/img/icons/css.svg';
import jsIcon from '../assets/img/icons/javascript.svg';
import bsIcon from '../assets/img/icons/bootstrap.svg';
import figmaIcon from '../assets/img/icons/figma.png';
import photoshopIcon from '../assets/img/icons/photoshop.png';
import djangoIcon from '../assets/img/icons/django.png';
import portfolio from '../assets/img/portfolio.png';
import portfolio1 from '../assets/img/portfolio1.png';
import portfolio2 from '../assets/img/portfolio2.png';
import portfolio3 from '../assets/img/portfolio3.png';
import portfolio4 from '../assets/img/portfolio4.png';
import portfolio5 from '../assets/img/portfolio5.png';

function Portfolio() {
    useEffect(() => {
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

                // Gestion du clic sur une carte
                track.addEventListener("click", (e) => {
                    const card = e.target.closest(".showPopup");
                    if (!card) return;

                    const title = card.dataset.title;
                    const tasks = JSON.parse(card.dataset.tasks || "[]");
                    const tech = JSON.parse(card.dataset.tech || "[]");

                    // Titre
                    popup.querySelector(".titleProjet").textContent = title;

                    // Tâches
                    const taskList = popup.querySelector(".taskList");
                    taskList.innerHTML = tasks
                        .map(
                            (t) => `<li class="col-md-3 col-6"><img src="${t.icon}" width="40" alt="">${t.label}</li>`
                        )
                        .join("");

                    // Technologies
                    const techLists = popup.querySelectorAll(".techList");
                    techLists[0].innerHTML = tech
                        .slice(0, 3)
                        .map(
                            (t) => `<li><img src="${t.icon}" width="${t.width}" alt=""></li>`
                        )
                        .join("");

                    techLists[1].innerHTML = tech
                        .slice(3)
                        .map(
                            (t) => `<li><img src="${t.icon}" width="${t.width}" alt=""></li>`
                        )
                        .join("");

                    // Afficher le popup
                    popup.classList.add("active");
                    scroller.classList.add("paused");
                });
            });
        }

        // Fermeture du popup
        closePopup?.addEventListener("click", () => {
            popup.classList.remove("active");
            scrollers.forEach((s) => s.classList.remove("paused"));
        });

        popup?.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.classList.remove("active");
                scrollers.forEach((s) => s.classList.remove("paused"));
            }
        });

        // Nettoyage
        return () => {
            closePopup?.removeEventListener("click", () => { });
            popup?.removeEventListener("click", () => { });
        };
    }, []);

    const projects = [
        {
            title: "Mon Portfolio",
            image: portfolio,
            tasks: [
                { icon: designIcon, label: "Design" },
                { icon: integrationIcon, label: "Intégration" },
                { icon: performanceIcon, label: "Optimisation" },
                { icon: accessIcon, label: "Accessibilité" }
            ],
            techs: [
                { icon: phpIcon, width: 40 },
                { icon: reactIcon, width: 30 },
                { icon: illustratorIcon, width: 30 },
                { icon: htmlIcon, width: 40 },
                { icon: cssIcon, width: 40 },
                { icon: jsIcon, width: 40 },
                { icon: bsIcon, width: 40 }
            ]
        },
        {
            title: "Praktek",
            image: portfolio1,
            tasks: [
                { icon: designIcon, label: "Design" },
                { icon: integrationIcon, label: "Intégration" },
                { icon: performanceIcon, label: "Optimisation" },
                { icon: accessIcon, label: "Accessibilité" }
            ],
            techs: [
                { icon: figmaIcon, width: 20 },
                { icon: photoshopIcon, width: 30 },
                { icon: illustratorIcon, width: 30 },
                { icon: htmlIcon, width: 40 },
                { icon: cssIcon, width: 40 },
                { icon: jsIcon, width: 40 },
                { icon: bsIcon, width: 40 }
            ]
        },
        {
            title: "Madagascar Dreamtours",
            image: portfolio2,
            tasks: [
                { icon: designIcon, label: "Design" },
                { icon: integrationIcon, label: "Intégration" },
                { icon: performanceIcon, label: "Optimisation" },
                { icon: accessIcon, label: "Accessibilité" }
            ],
            techs: [
                { icon: figmaIcon, width: 20 },
                { icon: djangoIcon, width: 30 },
                { icon: illustratorIcon, width: 30 },
                { icon: htmlIcon, width: 40 },
                { icon: cssIcon, width: 40 },
                { icon: jsIcon, width: 40 },
                { icon: bsIcon, width: 40 }
            ]
        },
        {
            title: "Kubeo",
            image: portfolio3,
            tasks: [
                { icon: designIcon, label: "Design" },
                { icon: integrationIcon, label: "Intégration" },
                { icon: performanceIcon, label: "Optimisation" },
                { icon: accessIcon, label: "Accessibilité" }
            ],
            techs: [
                { icon: figmaIcon, width: 20 },
                { icon: photoshopIcon, width: 30 },
                { icon: illustratorIcon, width: 30 },
                { icon: htmlIcon, width: 40 },
                { icon: cssIcon, width: 40 },
                { icon: jsIcon, width: 40 },
                { icon: bsIcon, width: 40 }
            ]
        },
        {
            title: "L'une de miel",
            image: portfolio4,
            tasks: [
                { icon: designIcon, label: "Design" },
                { icon: integrationIcon, label: "Intégration" },
                { icon: performanceIcon, label: "Optimisation" },
                { icon: accessIcon, label: "Accessibilité" }
            ],
            techs: [
                { icon: figmaIcon, width: 20 },
                { icon: photoshopIcon, width: 30 },
                { icon: illustratorIcon, width: 30 },
                { icon: htmlIcon, width: 40 },
                { icon: cssIcon, width: 40 },
                { icon: jsIcon, width: 40 },
                { icon: bsIcon, width: 40 }
            ]
        },
        {
            title: "Site de Madagascar",
            image: portfolio5,
            tasks: [
                { icon: designIcon, label: "Design" },
                { icon: integrationIcon, label: "Intégration" },
                { icon: performanceIcon, label: "Optimisation" },
                { icon: accessIcon, label: "Accessibilité" }
            ],
            techs: [
                { icon: figmaIcon, width: 20 },
                { icon: photoshopIcon, width: 30 },
                { icon: illustratorIcon, width: 30 },
                { icon: htmlIcon, width: 40 },
                { icon: cssIcon, width: 40 },
                { icon: jsIcon, width: 40 },
                { icon: bsIcon, width: 40 }
            ]
        }
    ];

    return (
        <section id="portfolio" className="py-5">
            <div className="container py-5">

                <div className="col-md-8 mx-auto text-center">
                    <h2 className="mb-3" data-aos="fade-up" data-aos-delay="100">Portfolio</h2>
                    <p data-aos="fade-up" data-aos-delay="200">
                        Voici quelques projets réalisés au sein de l’entreprise où j’ai travaillé,
                        mettant en valeur mes compétences en développement frontend et en webdesign.
                    </p>
                </div>

                <div className="d-flex justify-content-center gap-5 py-4">
                    <div className="icon-container">
                        <div className="icon-portfolio" data-aos="fade-up" data-aos-delay="300">1+</div>
                        <span data-aos="fade-up" data-aos-delay="400">Expérience</span>
                    </div>
                    <div className="icon-container">
                        <div className="icon-portfolio" data-aos="fade-up" data-aos-delay="500">6+</div>
                        <span data-aos="fade-up" data-aos-delay="600">Projets</span>
                    </div>
                </div>

                <div className="scroller" data-aos="fade-up" data-aos-delay="700">
                    <div className="scroller__inner">
                        {projects.map((proj, index) => (
                            <div
                                key={index}
                                className="showPopup"
                                data-title={proj.title}
                                data-tasks={JSON.stringify(proj.tasks)}
                                data-tech={JSON.stringify(proj.techs)}
                            >
                                <img
                                    src={proj.image}
                                    className="img-portfolio border-radius-20"
                                    width="400"
                                    alt={proj.title}
                                />
                                <button className="myBtn myBtn-white">En savoir plus</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div id="popup">
                <img src={closeIcon} className="closePopup" width="30" alt="Fermer" />
                <div className="container bg-popup">
                    <div className="popup-content text-center p-5 col-lg-6 mx-auto">
                        <h3 className="titleProjet">Madagascar Dreamtours</h3>
                        <p className="mb-0 mb-sm-3">Tâches :</p>
                        <ul className="taskList row"></ul>

                        <p>Technologies :</p>
                        <ul className="techList"></ul>
                        <ul className="techList"></ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
