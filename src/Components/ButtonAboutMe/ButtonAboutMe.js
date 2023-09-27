import React, {useState} from 'react';
import AboutMeCss from '../AboutMe/AboutMe.module.css'
import ButtonMe from '../ButtonAboutMe/ButtonAboutMe.module.css'


function ButtonAboutMe(){
   const [mostrarNovaDiv, setMostrarNovaDiv] = useState(false);

   function AbrirNovaDiv(){
      setMostrarNovaDiv(true);
   }

   function Fechar(){
      setMostrarNovaDiv(false);
   }

   return (
   <div>
      <button type="button" onClick={AbrirNovaDiv} className={`btn btn-danger ${AboutMeCss.apresentacao} ${ButtonMe.botao__quem_sou}`}>
         About Me
      </button>

      {mostrarNovaDiv && (
      <div>
          <div id='text'>
        <p>   Olá, meu nome é Wellington, sou natural de Goiânia - Goiás e formado em Gestão de Pessoas. 
        Tenho 35 anos e estou migrando para a área de tecnologia.
        Venho preparando-me para ser um Desenvolvedor Front-End, aprendendo diariamente com a conclusão de cursos e exercícios práticos.
            Prática essa que me capacitou a desenvolver projetos como esse, utilizando html, Css, Js e React .
            Procurarei aprender ainda mais para incluir novas funcionalidades ao projeto.</p>

    </div>
          <button type="button" onClick={Fechar} className={`btn btn-danger ${ButtonMe.botao__quem_sou}`}>
            Close About Me
          </button>
        </div>
      )}
   </div>
  );
}


export default ButtonAboutMe