import '../assets/css/Technologies.css'
import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css.png'
import jsIcon from '../assets/icons/js.png'
import bsIcon from '../assets/icons/bootstrap.png'
import jqueryIcon from '../assets/icons/jquery.png'
import reactIcon from '../assets/icons/react.png'
import phpIcon from '../assets/icons/php.png'
import nodejsIcon from '../assets/icons/nodejs.png'
import djangoIcon from '../assets/icons/django.png'
import mysqlIcon from '../assets/icons/mysql.png'
import figmaIcon from '../assets/icons/figma.png'
import psIcon from '../assets/icons/photoshop.png'
import aiIcon from '../assets/icons/illustrator.png'
import idIcon from '../assets/icons/indesign.png'
import prIcon from '../assets/icons/premier-pro.png'
import aeIcon from '../assets/icons/after-effects.png'
import xdIcon from '../assets/icons/xd.png'


function Technologies() {
    return <section id="technologie" className='py-5'>
        <div className="container">
            <h2 className="title titleTech text-center">Mes compétences</h2>
            <div className="techContainer mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className='text-center'>Technologie Front-end</h3>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={htmlIcon} className='iconTech' alt="icon html" />
                            <div className="progress w-100">
                                <div className="progress-bar html" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                        </div>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={cssIcon} className='iconTech' alt="icon css" />
                            <div className="progress w-100">
                                <div className="progress-bar css" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                        </div>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={jsIcon} className='iconTech' alt="icon js" />
                            <div className="progress w-100">
                                <div className="progress-bar js" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                        </div>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={bsIcon} className='iconTech' alt="icon bs" />
                            <div className="progress w-100">
                                <div className="progress-bar bs" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                        </div>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={jqueryIcon} className='iconTech' alt="icon jquery" />
                            <div className="progress w-100">
                                <div className="progress-bar jquery" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                        </div>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={reactIcon} className='iconTech' alt="icon react" />
                            <div className="progress w-100">
                                <div className="progress-bar react" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className='text-center'>Back-end et Base de donnée</h3>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={phpIcon} className='iconTech' alt="icon php" />
                            <div className="progress w-100">
                                <div className="progress-bar php" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={nodejsIcon} className='iconTech' alt="icon nodejs" />
                            <div className="progress w-100">
                                <div className="progress-bar nodejs" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={djangoIcon} className='iconTech' alt="icon django" />
                            <div className="progress w-100">
                                <div className="progress-bar django" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>
                        <div className="borderIcon d-flex align-items-center">
                            <img src={mysqlIcon} className='iconTech' alt="icon mysql" />
                            <div className="progress w-100">
                                <div className="progress-bar mysql" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>
                        <h3 className='text-center mt-4'>Design UI</h3>
                        <div className="text-center">
                            <div className="borderIcon">
                                <img src={figmaIcon} className='iconTech figma' alt="icon figma" />
                            </div>
                            <div className="borderIcon">
                                <img src={psIcon} className='iconTech' alt="icon photoshop" />
                            </div>
                            <div className="borderIcon">
                                <img src={aiIcon} className='iconTech' alt="icon illustrator" />
                            </div>
                            <div className="borderIcon">
                                <img src={idIcon} className='iconTech' alt="icon inDesign" />
                            </div>
                            <div className="borderIcon">
                                <img src={prIcon} className='iconTech' alt="icon premier pro" />
                            </div>
                            <div className="borderIcon">
                                <img src={aeIcon} className='iconTech' alt="icon after effects" />
                            </div>
                            <div className="borderIcon">
                                <img src={xdIcon} className='iconTech' alt="icon xd" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}
export default Technologies
