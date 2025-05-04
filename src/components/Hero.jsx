import { useState, useEffect } from 'react';
import '../assets/css/Hero.css';
import monImage from '../assets/tolotra.png';

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
                if (!isDeleting) return; // attendre avant de supprimer
                setIndex((prev) => (prev + 1) % texts.length);
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, texts]);

    return (
        <section id="heroSection">
            <div className="hero">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-lg-8 myDescriptionContainer">
                            <h2>Hello world!!</h2>
                            <span className='h1'>Je suis </span><h1 id="titleSkills" className='color-blue'>
                                {displayedText}
                                <span className="cursor">|</span>
                            </h1>
                            <p>
                                Bonjour, je m'appelle Tolojanahary, jeune passionné de l'informatique, particulièrement dans le développement web et la création d'interfaces modernes. J’aime transformer des idées en expériences visuelles fluides, accessibles et intuitives.
                            </p>
                            <div className="myBtnContainer">
                                <button className="myBtn myBtn-primary">Me contacter</button>
                                <button className="myBtn myBtn-primary">Télécharger mon CV</button>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center mypicContainer">
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
