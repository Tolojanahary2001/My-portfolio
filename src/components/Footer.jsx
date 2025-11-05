import '../assets/css/Footer.css'
import githubIcon from '../assets/img/icons/github-dark.svg';
import linkedinIcon from '../assets/img/icons/linkedin-dark.svg';
import dribbleIcon from '../assets/img/icons/dribble-dark.svg';
function Footer() {
    return (
        <footer>
            <div className="bg-footer">
                <div className="container">
                    <div className="footer-hr pb-2">
                        <a href="https://github.com/Tolojanahary2001" target="_blank">
                            <img src={githubIcon} width="50" alt="" />
                        </a>
                        <a href="https://mg.linkedin.com/in/tolojanahary-rasamoelilala-6b68b7331" target="_blank">
                            <img src={linkedinIcon} width="50" alt="" />
                        </a>
                        <a href="https://dribbble.com/Tolotra_01" target="_blank">
                            <img src={dribbleIcon} width="50" alt="" />
                        </a>
                    </div>
                    <p className="text-center pt-2">
                        Tolojanahary Rasamoelilala | Copyright © 2025 | Tous droits réservés
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer