import './styles.css'
import HTMLAndCSS from './assets/html-css.png'
import JavascriptApi from './assets/javascript-api.png'
import JavascriptDinamic from './assets/javascript-dinamic.png'
import JavascriptLocal from './assets/javascript-local.png'
import JavascriptOO from './assets/javascript-OO.png'
import Logic from './assets/logic-js-1.png'
import ReactJs from './assets/react-js.png'
import ReactJsx from './assets/react-jsx.png'
import FlexboxAndGrid from './assets/flexbox-grid.png'
import GitAndGithub from './assets/git-github.png'






export default function Certificates(){
    return(
        <section id='container__certificates' className='certificates skills'>
            <div>
                <h2 className='container__title'>Course Certificates</h2>
            </div>
            <div className='carousel slide' data-bs-ride="carousel" id='carouselExampleAutoplaying'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src={HTMLAndCSS} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={Logic} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={JavascriptApi} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={JavascriptDinamic} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={JavascriptLocal} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={JavascriptOO} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={ReactJs} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={ReactJsx} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={FlexboxAndGrid} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                    <div className='carousel-item'>
                        <img src={GitAndGithub} alt="" className='d-block w-100 certificate-image'/>
                    </div>
                </div>
                <div>
                    <button className='carousel-control-prev' type='button' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button' data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </section>
    )
}