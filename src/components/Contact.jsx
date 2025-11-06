import '../assets/css/Contact.css'
import whatsappIcon from '../assets/img/icons/whatsapp.svg'
import emailIcon from '../assets/img/icons/email.svg'
function Contact() {
    return (
        <section id="contact" className="py-5">
            <div className="container py-5 d-flex justify-content-center align-items-center h-100">
                <div className="row contact-container w-100" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6 p-0 left-contact">
                        <div className="bg-left-contact">
                            <div className="col-md-8 p-3">
                                <h2 className="py-3 text-center" data-aos="fade-up" data-aos-delay="200">Envie de collaborez?
                                    Contactez-moi sur</h2>
                                <div className="contactLink">
                                    <a href="https://wa.me/261343514062" title="Discuter sur Whatsapp" target="_blank"
                                        className="text-white text-decoration-none nowrap">
                                        <img src={whatsappIcon} className="me-2" width="40" alt=""
                                            data-aos="fade-in" data-aos-delay="300" />
                                        <span className="text-underlined" data-aos="fade-up" data-aos-delay="400">
                                            +261 34 35 140 62
                                        </span>
                                    </a>

                                    <a href="mailto:tolotra.rasamoelilala@gmail.com" title="Envoyer un email"
                                        target="_blank" className="text-white text-decoration-none nowrap">
                                        <img src={emailIcon} className="me-2" width="40" alt=""
                                            data-aos="fade-in" data-aos-delay="500" />
                                        <span className="text-underlined" data-aos="fade-up" data-aos-delay="600">
                                            tolotra.rasamoelilala@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-white p-0">
                        <form action="https://formspree.io/f/xyzplzln" method="POST" className="formulaire p-4 p-md-5">

                            <input type="hidden" name="_redirect" value="https://portfolio-4233c.web.app/merci.html" />

                            <div className="input-container" data-aos="fade-up" data-aos-delay="500">
                                <input id="nom" type="text" name="nom" autocomplete="nom" placeholder=" " required />
                                <label className="label" for="nom">Nom</label>
                            </div>
                            <div className="input-container" data-aos="fade-up" data-aos-delay="600">
                                <input id="prenom" type="text" name="prenom" autocomplete="prenom" placeholder=" " required />
                                <label className="label" for="prenom">Prénom</label>
                            </div>
                            <div className="input-container" data-aos="fade-up" data-aos-delay="700">
                                <input id="email" type="text" name="email" autocomplete="email" placeholder=" " required />
                                <label className="label" for="email">Email</label>
                            </div>
                            <div className="input-container" data-aos="fade-up" data-aos-delay="800">
                                <textarea id="message" name="message" autocomplete="message" placeholder=" "
                                    required></textarea>
                                <label className="label" for="message">Message</label>
                            </div>
                            <button type="submit" className="myBtn myBtn-primary" data-aos="fade-up" data-aos-delay="900">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contact