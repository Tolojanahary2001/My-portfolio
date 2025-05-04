import '../assets/css/Technologies.css'
import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/css.png'
import jsIcon from '../assets/icons/js.png'


function Technologies() {
    return <section id="technologie" className='py-5'>
        <div className="container">
            <h2 className="titleTech text-center">Les Technologies</h2>
            <div className="techContainer mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-4">
                                <div className="borderIcon">
                                    <img src={htmlIcon} className='iconTech' alt="icon html" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="borderIcon">
                                    <img src={cssIcon} className='iconTech' alt="icon html" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="borderIcon">
                                    <img src={jsIcon} className='iconTech' alt="icon html" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}
export default Technologies
