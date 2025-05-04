
import '../assets/css/Hero.css'
import monImage from '../assets/tolotra.png'

function Hero() {
    return (
        <section id="heroSection">
            <div className="hero">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-lg-8 myDescriptionContainer">
                            <h2>Hello world!! </h2>
                            <h1 id='titleSkills'>Développeur Web</h1>
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
    )
}
export default Hero;
