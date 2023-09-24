 import AboutMeCss from './AboutMe.module.css';

function TextAboutMe(){
    let tecnologias = {
        markup : "HTML",
        style : "CSS",
        frameworkCss : "Bootstrap",
        language : "Javascript",
        bibliotecaJS : "React", 

    }
    let name = "Wellington Junior";
    let age = 35;

    return(    
    <div className={AboutMeCss.fechar__botao}>
        <p className={AboutMeCss.texto__quem_sou}>   Olá, meu nome é {name}, sou natural de Goiânia - Goiás e formado em Gestão de Pessoas. 
        Tenho {age} anos e estou migrando para a área de tecnologia.
        Venho preparando-me para ser um Desenvolvedor Front-End, aprendendo diariamente com a conclusão de cursos e exercícios práticos.
            Prática essa que me capacitou a desenvolver projetos como esse, utilizando {tecnologias.markup}, {tecnologias.style} com o framework {tecnologias.frameworkCss} e a linguagem de programação {tecnologias.language}.
            Procurarei aprender ainda mais para incluir novas funcionalidades ao projeto.</p>
        <button type="button" onclick="fechar()"       className={`${AboutMeCss.btn} ${AboutMeCss['btn-outline-warning']} ${AboutMeCss.fechar}`}
>Fechar</button>
    </div>)
    

};


export default TextAboutMe
