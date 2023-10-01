import React, {useState} from 'react';
import AboutMeCss from '../SectionAboutMe/AboutMe.module.css'
import ButtonMe from '../ButtonAboutMe/ButtonAboutMe.module.css'

let tecnologia = ["HTML, " , "CSS, " , "Bootstrap, " , "Javascript, " , "React, Git"];

let tecnologias = tecnologia.map(
      function(listaDeTecnologias){
      return listaDeTecnologias
   })



let name = "Wellington Junior";
let age = "35 anos";
let learning = "1 ano e 4 meses";

function ButtonAboutMe(){
   const [textAboutMe, setTextAboutMe] = useState(false);

   function OpenText(){
      setTextAboutMe(true);
   }

   function toClose(){
      setTextAboutMe(false);
   }

   return (
   <div id={ButtonMe.OpenText}>
      <button type="button" onClick={OpenText} class={`${ButtonMe.btn} ${ButtonMe.btn__success}`}>
         About Me
      </button>   

      {textAboutMe && (
      <div id={AboutMeCss.text}>
        
        <p>   Olá, meu nome é {name}, sou natural de Goiânia - Goiás, formado em Gestão de Pessoas. 
        Tenho {age} e estou migrando para a área de tecnologia há {learning}. <br></br>
        Venho preparando-me para ser um <strong>Desenvolvedor Front-End</strong>, aprendendo diariamente com a conclusão de cursos e exercícios práticos.
            Prática essa que me capacitou a desenvolver projetos como esse, aplicando conhecimentos em {tecnologias}.<br></br>
            Espero minha primeira oportunidade na área, para crescer profissionalmente, crescer em conhecimento e agregar valor a empresa.<br></br>
            Caso tenha interesse em me oferecer uma oportunidade, ao fim da página deixarei meus contatos.
         </p>

  
          <button type="button" onClick={toClose} class={`${ButtonMe.btn} ${ButtonMe.btn_success}`}>

            Close About Me
          </button>
        </div>
      )}
   </div>
  );
}


export default ButtonAboutMe