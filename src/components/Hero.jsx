import '../assets/css/Hero.css'
import monImage from '../assets/tolotra.png'

function Hero() {
    return (
        <section id="heroSection">
            <div className="hero">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8 myDescriptionContainer">
                            <h2>Hello world!! </h2>
                            <h1>Je suis un <span className='mySkills color-blue'>Développeur Front-end</span></h1>
                            <p>Bonjour, je m'appelle Tolojanahary, jeune passionné de l'informatique, particulièrement dans le développement web et la création d'interfaces modernes. J’aime transformer des idées en expériences visuelles fluides, accessibles et intuitives.</p>
                            <div className="myBtnContainer">
                                <button className='myBtn myBtn-primary'>A propos de moi</button>
                                <button className='myBtn myBtn-primary'>Travaillons ensemlble!</button>
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