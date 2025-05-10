import '../assets/css/Footer.css'
import githubIcon from '../assets/icons/github.png'
import linkedinIcon from '../assets/icons/linkedIn.png'
function Footer(){
    return(
        <section id="footer">
            <div className="container d-flex">
                <div className="d-flex gap-4">
                <p><img src={githubIcon} className='img-fluid icon-footer' alt="icon github" /></p>
                <p><img src={linkedinIcon} className='img-fluid icon-footer' alt="icon linkedIn" /></p>
                </div>

                <div>
                    <p>
                    Copyright © 2025 | Tous droits réservés
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Footer