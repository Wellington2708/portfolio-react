import ImageAboutMe from './castelo.png'
import AboutMeCss from './AboutMe.module.css'
import ButtonAboutMe from '../ButtonAboutMe/ButtonAboutMe.js'


function AboutMe(){
    return (
            <div id="aboutMe" className={AboutMeCss.apresentacao}>
                <img src={ImageAboutMe} alt="I'm in front the castle." class={AboutMeCss.imagem__castelo}/>
                <ButtonAboutMe/>
            </div>   

    );
}

export default AboutMe