import { useState } from "react";
import "../assets/css/Contact.css";
import whatsappIcon from "../assets/img/icons/whatsapp.svg";
import emailIcon from "../assets/img/icons/email.svg";
import merciImg from "../assets/img/merci.gif";

function Contact() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [status, setStatus] = useState("idle");
    const [prenom, setPrenom] = useState(""); // 👈 on stocke le prénom ici

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const formData = new FormData(form);

        // 👇 On récupère le prénom AVANT de réinitialiser le formulaire
        const userPrenom = formData.get("prenom");
        setPrenom(userPrenom);

        try {
            const response = await fetch("https://formspree.io/f/xyzplzln", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("success");
                setPopupVisible(true); // ✅ affiche le popup
                form.reset(); // on vide le formulaire APRÈS avoir stocké le prénom
            } else {
                setStatus("error");
                setPopupVisible(true);
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setPopupVisible(true);
        }
    };

    return (
        <section id="contact" className="py-5">
            <div className="container py-5 d-flex justify-content-center align-items-center h-100">
                <div
                    className="row contact-container w-100"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {/* === Colonne gauche === */}
                    <div className="col-lg-6 p-0 left-contact">
                        <div className="bg-left-contact">
                            <div className="col-md-8 p-3">
                                <h2
                                    className="py-3 text-center"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    Envie de collaborer ? <br /> Contactez-moi sur
                                </h2>

                                <div className="contactLink">
                                    <a
                                        href="https://wa.me/261343514062"
                                        title="Discuter sur Whatsapp"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white text-decoration-none nowrap"
                                    >
                                        <img
                                            src={whatsappIcon}
                                            className="me-2"
                                            width="40"
                                            alt=""
                                            data-aos="fade-in"
                                            data-aos-delay="300"
                                        />
                                        <span
                                            className="text-underlined"
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                        >
                                            +261 34 35 140 62
                                        </span>
                                    </a>

                                    <a
                                        href="mailto:tolotra.rasamoelilala@gmail.com"
                                        title="Envoyer un email"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white text-decoration-none nowrap"
                                    >
                                        <img
                                            src={emailIcon}
                                            className="me-2"
                                            width="40"
                                            alt=""
                                            data-aos="fade-in"
                                            data-aos-delay="500"
                                        />
                                        <span
                                            className="text-underlined"
                                            data-aos="fade-up"
                                            data-aos-delay="600"
                                        >
                                            tolotra.rasamoelilala@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === Colonne droite === */}
                    <div className="col-lg-6 bg-white p-0">
                        <form
                            id="contactForm"
                            className="formulaire p-4 p-md-5"
                            onSubmit={handleSubmit}
                        >
                            <div
                                className="input-container"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <input id="nom" name="nom" placeholder=" " required />
                                <label className="label" htmlFor="nom">
                                    Nom
                                </label>
                            </div>

                            <div
                                className="input-container"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <input
                                    id="prenom"
                                    name="prenom"
                                    placeholder=" "
                                    required
                                    onChange={(e) => setPrenom(e.target.value)} // 👈 pour mise à jour en direct si besoin
                                />
                                <label className="label" htmlFor="prenom">
                                    Prénom
                                </label>
                            </div>

                            <div
                                className="input-container"
                                data-aos="fade-up"
                                data-aos-delay="700"
                            >
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder=" "
                                    required
                                />
                                <label className="label" htmlFor="email">
                                    Email
                                </label>
                            </div>

                            <div
                                className="input-container"
                                data-aos="fade-up"
                                data-aos-delay="800"
                            >
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder=" "
                                    required
                                ></textarea>
                                <label className="label" htmlFor="message">
                                    Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="myBtn myBtn-primary"
                                data-aos="fade-up"
                                data-aos-delay="900"
                                disabled={status === "sending"}
                            >
                                {status === "sending" ? "Envoi..." : "Envoyer"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* === Popup personnalisé === */}
            {popupVisible && (
                <div className="popup-overlay px-3" onClick={() => setPopupVisible(false)}>
                    <div
                        className="popup-content container py-5"
                        data-aos="zoom-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {status === "success" ? (
                            <>
                                <div className="d-flex justify-content-center">
                                    <div className="image-crop">
                                        <img
                                            src={merciImg}
                                            alt="merciImg"
                                            className="merciImg"
                                        />
                                    </div>
                                </div>

                                {/* 👇 Message personnalisé */}
                                <h3>
                                    Merci {prenom ? <>{prenom}</> : "pour votre message"} 🎉
                                </h3>
                                <p>Votre message a bien été envoyé.</p>
                            </>
                        ) : (
                            <>
                                <h3>Oups 😢</h3>
                                <p>Une erreur est survenue. Merci de réessayer et veuillez bien verifiez vos informations.</p>
                            </>
                        )}

                        <div className="d-flex justify-content-center">
                            <button
                                className="myBtn myBtn-primary"
                                onClick={() => setPopupVisible(false)}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Contact;
