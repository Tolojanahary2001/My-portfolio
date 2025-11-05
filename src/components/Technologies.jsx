import { useEffect } from "react";
import '../assets/css/Technologies.css';
import htmlIcon from '../assets/img/icons/html.svg';
import cssIcon from '../assets/img/icons/css.svg';
import jsIcon from '../assets/img/icons/javascript.svg';
import bsIcon from '../assets/img/icons/bootstrap.svg';
import reactIcon from '../assets/img/icons/react.svg';
import phpIcon from '../assets/img/icons/php.svg';
import nodejsIcon from '../assets/img/icons/nodejs.svg';
import djangoIcon from '../assets/img/icons/django.svg';
import mysqlIcon from '../assets/img/icons/mysql.svg';
import figmaIcon from '../assets/img/icons/figma.png';
import psIcon from '../assets/img/icons/photoshop.png';
import aiIcon from '../assets/img/icons/illustrator.png';
import idIcon from '../assets/img/icons/indesign.png';
import gitIcon from '../assets/img/icons/git.svg';

function Technologies() {

    useEffect(() => {
        const section = document.querySelector("#technologie");
        if (!section) return;

        const bars = section.querySelectorAll(".progress-bar");
        let sectionVisible = false;

        const isInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        };

        const triggerAnimation = () => {
            if (sectionVisible) return;
            if (isInViewport(section)) {
                sectionVisible = true;
                bars.forEach((bar) => {
                    const target = parseInt(bar.getAttribute("data-percentage"));
                    bar.style.transition = "width 2.5s ease-in-out";
                    bar.style.width = `${target}%`;
                    bar.setAttribute("aria-valuenow", target);
                });
            }
        };

        // 🔹 Correction principale : écouter sur window, pas document
        window.addEventListener("scroll", triggerAnimation);
        window.addEventListener("load", triggerAnimation);

        // 🔹 Déclenche immédiatement après le rendu (utile si la section est déjà visible)
        triggerAnimation();

        // Nettoyage
        return () => {
            window.removeEventListener("scroll", triggerAnimation);
            window.removeEventListener("load", triggerAnimation);
        };
    }, []);

    return (
        <section id="technologie">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4 p-3 mb-4 p-sm-5">
                        <h2 className="mb-3" data-aos="fade-up" data-aos-delay="100">Technologies</h2>
                        <p data-aos="fade-up" data-aos-delay="300">
                            Bien que mes compétences soient davantage orientées vers
                            les technologies d’interface et leurs frameworks, je
                            possède également des notions en back-end. Par ailleurs,
                            mon profil créatif s'étend à la maîtrise de logiciels de design :
                        </p>
                        <div className="iconDesign">
                            <img src={psIcon} width="40" alt="Photoshop" data-aos="fade-up" data-aos-delay="500" />
                            <img src={aiIcon} width="40" alt="Illustrator" data-aos="fade-up" data-aos-delay="600" />
                            <img src={idIcon} width="40" alt="InDesign" data-aos="fade-up" data-aos-delay="700" />
                            <img src={figmaIcon} width="25" alt="Figma" data-aos="fade-up" data-aos-delay="800" />
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="techContainer p-3 p-sm-5 border-radius-20" data-aos="fade-up" data-aos-delay="1000">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-center">Front-end</h3>

                                    {[
                                        { icon: htmlIcon, percent: 90 },
                                        { icon: cssIcon, percent: 80 },
                                        { icon: jsIcon, percent: 70 },
                                        { icon: bsIcon, percent: 90 },
                                        { icon: reactIcon, percent: 50 },
                                    ].map((tech, i) => (
                                        <div key={i} className="d-flex align-items-center gap-3 mb-4">
                                            <img src={tech.icon} className="techIcon" width="50" alt="" />
                                            <div className="progress w-100">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    data-percentage={tech.percent}
                                                    aria-valuenow="0"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    {tech.percent}%
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-md-6">
                                    <h3 className="text-center">Back-end</h3>

                                    {[
                                        { icon: phpIcon, percent: 60 },
                                        { icon: nodejsIcon, percent: 50 },
                                        { icon: djangoIcon, percent: 60 },
                                        { icon: mysqlIcon, percent: 50 },
                                        { icon: gitIcon, percent: 70 },
                                    ].map((tech, i) => (
                                        <div key={i} className="d-flex align-items-center gap-3 mb-4">
                                            <img src={tech.icon} className="techIcon" width="50" alt="" />
                                            <div className="progress w-100">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    data-percentage={tech.percent}
                                                    aria-valuenow="0"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    {tech.percent}%
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technologies;
