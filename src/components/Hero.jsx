import { useState, useEffect } from 'react';
import '../assets/css/Hero.css';
import monImage from '../assets/img/tolotra.webp';
import downloadIcon from '../assets/img/icons/download.svg';
import downloadIcon2 from '../assets/img/icons/download-light.svg';
import githubIcon from '../assets/img/icons/github-dark.svg';
import linkedinIcon from '../assets/img/icons/linkedin-dark.svg';
import dribbleIcon from '../assets/img/icons/dribble-dark.svg';

function Hero() {
    const texts = ["Développeur Front-end", "Web Designer UI/UX", "Intégrateur"];
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[index];
        let timeout;

        if (!isDeleting && charIndex <= currentText.length) {
            setDisplayedText(currentText.substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex(prev => prev + 1), 100);
        } else if (isDeleting && charIndex >= 0) {
            setDisplayedText(currentText.substring(0, charIndex));
            timeout = setTimeout(() => setCharIndex(prev => prev - 1), 50);
        } else {
            timeout = setTimeout(() => {
                setIsDeleting(!isDeleting);
                if (!isDeleting) return;
                setIndex((prev) => (prev + 1) % texts.length);
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, texts]);

    return (
        <section id="hero">
            <div className="hero py-5">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-lg-8 myDescriptionContainer">
                            <div className=" mobilePic d-inline-block d-lg-none" data-aos="fade-up" data-aos-delay="100">
                                <img src={monImage} alt="mon image" className="myPicture" />
                            </div>
                            <div className='typingContainer'>
                                <p className="hello" data-aos="fade-up" data-aos-delay="200">Hello world !! 👋</p>
                                <span className='h1' data-aos="fade-up" data-aos-delay="300">Je suis </span>
                                <h1 id="titleSkills" className='color-blue mb-2' data-aos="fade-in" data-aos-delay="500">
                                    {displayedText}
                                    <span className="cursor">|</span>
                                </h1>
                                <div className="mb-0 mb-sm-4">
                                    <a href="https://github.com/Tolojanahary2001" target="_blank">
                                        <img src={githubIcon} width="50" alt="" data-aos="fade-up"
                                            data-aos-delay="600" />
                                    </a>
                                    <a href="https://mg.linkedin.com/in/tolojanahary-rasamoelilala-6b68b7331"
                                        target="_blank">
                                        <img src={linkedinIcon} width="50" alt="" data-aos="fade-up"
                                            data-aos-delay="700" />
                                    </a>
                                    <a href="https://dribbble.com/Tolotra_01" target="_blank">
                                        <img src={dribbleIcon} width="50" alt="" data-aos="fade-up"
                                            data-aos-delay="800" />
                                    </a>
                                </div>
                            </div>

                            <div className="myBtnContainer mt-2">
                                <div data-aos="fade-up" data-aos-delay="900">
                                    <a href='#contact' className="myBtn myBtn-primary  d-flex justify-content-center w-100">
                                        Me contacter</a>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="1000">
                                    <a href='#contact' className="myBtn myBtn-secondary w-100 d-flex justify-content-center gap-2 position-relative overflow-hidden">
                                        <span>Télécharger mon CV</span>
                                        <span className="icon-wrapper">
                                            <img src={downloadIcon} className="img-fluid icon-default"
                                                width="20" alt="" />
                                            <img src={downloadIcon2} className="img-fluid icon-hover"
                                                width="20" alt="" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mypicContainer d-flex align-items-center" data-aos="fade-left"
                            data-aos-delay="600">
                            <div className="coverPic">
                                <img src={monImage} alt="mon image" className="myPicture" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;