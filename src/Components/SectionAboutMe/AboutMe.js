import aboutMe from './castelo.png'

function AboutMe(){
    return (
        <section id="sobreMim" class="apresentacao">
            <div class="apresentacao__imagem">
                <img src={aboutMe} alt="Wellington tirando foto em frente ao castelo" class="imagem__castelo"/>
            </div>
            <div class="apresentacao__quem__sou">
                <button type="button" class="btn btn-outline-warning botao__quem-sou">Sobre Mim</button>
            </div>
        </section>
    );
}

export default AboutMe