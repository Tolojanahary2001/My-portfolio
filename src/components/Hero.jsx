import { useState, useEffect } from 'react';
import '../assets/css/Hero.css';
import monImage from '../assets/tolotra.png';
import fleche from '../assets/icons/fleche.svg';
import downloadIcon from '../assets/icons/download.svg'

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
            <div className="hero">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-lg-8 myDescriptionContainer">
                            <div className=" mobilePic d-inline-block d-lg-none">
                                <img src={monImage} alt="mon image" className="myPicture" />
                            </div>
                            <div className='typingContainer'>
                                <span className='h1'>Je suis </span><h1 id="titleSkills" className='color-blue'>
                                    {displayedText}
                                    <span className="cursor">|</span>
                                </h1>
                            </div>
                            <p>
                                Je m'appelle Tolojanahary, jeune passionné de la technologhie web et de l'interfaces modernes.
                            </p>
                            <div className="myBtnContainer">
                                <button className="myBtn myBtn-primary">Me contacter</button>
                                <button className="myBtn myBtn-primary d-flex justify-content-center gap-2"><span>Télécharger mon CV</span>
                                    <img src={downloadIcon} className='img-fluid' width="20" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center mypicContainer">
                            <div className="coverPic">
                                <img src={monImage} alt="mon image" className="myPicture" />
                            </div>
                        </div>
                    </div>
                    <div className="w-100 text-center">
                        <img src={fleche} alt="fleche" className="fleche" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;