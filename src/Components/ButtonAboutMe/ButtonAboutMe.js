import AboutMeCss from '../AboutMe/AboutMe.module.css'
import ButtonMe from '../ButtonAboutMe/ButtonAboutMe.module.css'



function OpenText(){
   let text = document.getElementById("text");
   text.innerHTML = `
   <div className={Text.botao__quem_sou}>
      <p className={TextButton.texto__quem_sou}>   Olá, meu nome é {name}, sou natural de Goiânia - Goiás e formado em Gestão de Pessoas. 
      Tenho {age} anos e estou migrando para a área de tecnologia.
      Venho preparando-me para ser um Desenvolvedor Front-End, aprendendo diariamente com a conclusão de cursos e exercícios práticos.
         Prática essa que me capacitou a desenvolver projetos como esse, utilizando {tecnologias.markup}, {tecnologias.style} com o framework {tecnologias.frameworkCss} e a linguagem de programação {tecnologias.language}.
         Procurarei aprender ainda mais para incluir novas funcionalidades ao projeto.</p>
         <button type="button" onclick="fechar()" className="btn btn-warning">Fechar</button>
   </div>
   `

}


  

function ButtonAboutMe(){

   return(
      <div id="text" className={AboutMeCss.apresentacao}>
         <button type="button" onClick={OpenText} className={`btn btn-warning ${ButtonMe.botao__quem_sou} `}>About Me</button>
      </div>
   )
    
}

export default ButtonAboutMe