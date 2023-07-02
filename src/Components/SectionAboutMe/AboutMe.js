import ImageAboutMe from './castelo.png'
import AboutMeCss from './AboutMe.module.css';


function AboutMe(){
    return (
        <section id="sobreMim" className={AboutMeCss.apresentacao}>
            <div className={AboutMeCss.apresentacao__imagem}>
                <img src={ImageAboutMe} alt="Eu tirando foto em frente ao castelo" class={AboutMeCss.imagem__castelo}/>
            </div>
            <div className={AboutMeCss.apresentacao__quem__sou}>
                <button type="button" class="btn btn-outline-warning botao__quem_sou">Sobre Mim</button>
            </div>
        </section>
    );
}

export default AboutMe