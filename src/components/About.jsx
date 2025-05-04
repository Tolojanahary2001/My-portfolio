
import '../assets/css/About.css'
import calmIcon from '../assets/icons/meditation.svg'
import dynamicIcon from '../assets/icons/dynamique.svg'
import organisedIcon from '../assets/icons/organised.svg'

function About() {
    return <div id="aboutSection" className='container text-center'>
        <h3>A PROPOS DE MOI</h3>
        <div className="row mt-5">
            <div className="col-lg-4 card-about text-center border-right-blue">
                <div>
                <img src={calmIcon} className='img-fluid mb-3' alt="icon calme" width="60"/>
                <h3>Calme</h3>
                </div>
            </div>
            <div className="col-lg-4 card-about text-center border-right-blue">
                <div>
                <img src={dynamicIcon} className='img-fluid mb-3' alt="icon calme" width="60"/>
                <h3>Dynamique</h3>
                </div>
            </div>
            <div className="col-lg-4 card-about text-center">
                <div>
                <img src={organisedIcon} className='img-fluid mb-3' alt="icon calme" width="60"/>
                <h3>Organisé</h3>
                </div>
                
            </div>
        </div>
    </div>
}
export default About
