
import '../assets/css/About.css'
import devImage from '../assets/img/dev.png'
import detailIcon from '../assets/img/icons/details.svg'
import accessIcon from '../assets/img/icons/accessibility.svg'
import performIcon from '../assets/img/icons/performance.svg'

function About() {
    return (
        <section id="about">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 py-4 d-flex justify-content-center align-items-start">
                        <img src={devImage} className="aboutPicture" alt="" data-aos="fade-up" />
                    </div>
                    <div className=" col-md-6">
                        <h2 className="mb-3" data-aos="fade-up" data-aos-delay="300">A propos de moi</h2>
                        <p data-aos="fade-up" data-aos-delay="400">Je m'appelle Tolojanahary, une personne calme et engagé.
                            Passionné par le développement frontend et le webdesign, je me distingue par mon
                            <b> souci du détail</b>, mon sens du design, et mon attention à la <b>performance</b> et à
                            l’<b>accessibilité</b>.
                            J’allie créativité et efficacité, avec un focus sur JavaScript et l’optimisation de l’expérience
                            utilisateur.
                        </p>
                        <div className="atouts row py-3">
                            <div className="col-sm-4 text-center">
                                <img src={detailIcon} width="40" alt="" data-aos="fade-up"
                                    data-aos-delay="400" />
                                <p className="pt-2" data-aos="fade-up" data-aos-delay="500">Détails</p>
                            </div>
                            <div className="col-sm-4 col-6 text-center">
                                <img src={accessIcon} width="40" alt="" data-aos="fade-up"
                                    data-aos-delay="600" />
                                <p className="pt-2" data-aos="fade-up" data-aos-delay="700">Accessibilité</p>
                            </div>
                            <div className="col-sm-4 col-6 text-center">
                                <img src={performIcon} width="40" alt="" data-aos="fade-up"
                                    data-aos-delay="800" />
                                <p className="pt-2" data-aos="fade-up" data-aos-delay="900">Performance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About
