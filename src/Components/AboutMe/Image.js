import ImageAboutMe from './castelo.png'
import AboutMeCss from './AboutMe.module.css'
import BotaoSobreMim from '../ButtonAboutMe/BotaoSobreMim.js'


function AboutMe(){
    return (
            <div id="aboutMe" className={AboutMeCss.apresentacao}>
                <img src={ImageAboutMe} alt="Eu tirando foto em frente ao castelo" class={AboutMeCss.imagem__castelo}/>
                <BotaoSobreMim/>
            </div>   
    );
}

export default AboutMe