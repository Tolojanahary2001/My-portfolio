import { useState, useEffect } from 'react';
import '../assets/css/Hero.css';
import monImage from '../assets/tolotra.png';

function Hero() {
    const [title, setTitle] = useState('');
    const [typingClass, setTypingClass] = useState('');  // Pour appliquer les classes 'typing' et 'erasing'
    const texts = ["Développeur Front-end", "Web Designer", "Producteur A/V"];
    let index = 0;

    // Fonction pour afficher le texte
    function typeText(text, callback) {
        setTitle(text);
        setTypingClass('typing'); // Ajoute la classe 'typing' pour l'animation
        setTimeout(() => {
            if (callback) callback();
        }, 2000);
    }

    // Fonction pour effacer le texte
    function eraseText(callback) {
        setTypingClass('erasing'); // Ajoute la classe 'erasing' pour l'animation d'effacement
        setTimeout(() => {
            setTitle(''); // Efface le texte affiché
            if (callback) callback();
        }, 2000);
    }

    // Fonction qui lance la séquence de texte
    function playSequence() {
        typeText(texts[index], () => {
            setTimeout(() => {
                eraseText(() => {
                    index = (index + 1) % texts.length;
                    playSequence();
                });
            }, 3000);
        });
    }

    // Démarre la séquence quand le composant est monté
    useEffect(() => {
        playSequence();
    }, []);

    return (
        <section id="heroSection">
            <div className="hero">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-lg-8 myDescriptionContainer">
                            <h2>Hello world!! </h2>
                            <h1 
                                id='titleSkills' 
                                className={typingClass} // Applique dynamiquement la classe 'typing' ou 'erasing'
                                style={{'--length': title.length}} // Applique dynamiquement la longueur du texte
                            >
                                {title}
                            </h1>
                            <p>Bonjour, je m'appelle Tolojanahary, jeune passionné de l'informatique, particulièrement dans le développement web et la création d'interfaces modernes. J’aime transformer des idées en expériences visuelles fluides, accessibles et intuitives.</p>
                            <div className="myBtnContainer">
                                <button className='myBtn myBtn-primary'>Me contacter</button>
                                <button className='myBtn myBtn-primary'>Télécharger mon CV</button>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center mypicContainer">
                            <div className='coverPic'>
                                <img src={monImage} alt="mon image" className='myPicture' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
