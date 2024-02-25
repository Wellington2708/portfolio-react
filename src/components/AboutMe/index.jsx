import './styles.css'
import Castelo from './assets/castelo.png'

export default function AboutMe(){
    return (
        <section id="aboutMe" className="presentation">
            <div className='presentation__image'>
                <img src={Castelo} alt="Wellington taking a photo in front of the castle" className='image__castle'/>
            </div>
            <div className='presentation__whoIAm'>
                <button type='button' className='btn btn-outline-warning button__whoIAm'>About Me</button>
            </div>
        </section>
    )
}