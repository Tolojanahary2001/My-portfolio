import '../assets/css/About.css'
import myHoliday from '../assets/img/vacance.png'
import myAboutDev from '../assets/img/developpeur.jpg'
import myAboutSerious from '../assets/img/portrait.png'
function About() {
    return <section id="aboutSection">
        <div className='container py-5'>
            <div className="row">
                <div className="col-lg-8 mypicAboutContainer">
                    <div className="row">
                        <div className="col-6 px-0 myAboutLeftPic position-relative">
                            <img className='myAboutpic img-fluid' src={myHoliday} alt="my picture" />
                            <h3 className='aboutTitle'>Calme</h3>
                            <div className="bgColorAbout position-absolute top-0 start-0 w-100 h-100"></div>
                        </div>
                        <div className="col-6 myAboutRightPic">
                            <div className="myAboutPicContainer position-relative">
                                <img className='myAboutpic img-fluid' src={myAboutDev} alt="my picture" />
                                <h3 className='aboutTitle'>Passionné</h3>
                                <div className="bgColorAbout position-absolute top-0 start-0 w-100 h-100"></div>
                            </div>
                            <div className="myAboutPicContainer position-relative">
                            <img className='myAboutSerious img-fluid' src={myAboutSerious} alt="my picture" />
                                <h3 className='aboutTitle'>Sérieux</h3>
                                <div className="bgColorAbout position-absolute top-0 start-0 w-100 h-100"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 aboutDescription">
                    <h2 className='aboutTitle mb-4'>A propos de moi</h2>
                    <p>Je suis une personne calme, passionnée par le développement web, et toujours prête à apprendre. Sérieux et engagé dans ce que j’entreprends, j’accorde une grande importance à la qualité du travail et aux détails, afin de créer des expériences numériques à la fois fonctionnelles et esthétiques.</p>
                    <button className='myBtn myBtn-secondary'>Me contacter</button>
                </div>
            </div>
        </div>
    </section>
}
export default About