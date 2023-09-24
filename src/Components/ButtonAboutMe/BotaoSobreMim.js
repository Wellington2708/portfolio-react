import AboutMeCss from '../AboutMe/AboutMe.module.css'


function BotaoSobreMim(){

   return(
    <div className={AboutMeCss.apresentacao__quem__sou}>
                <button type="button"   className={`${AboutMeCss.btn} ${AboutMeCss['btn-outline-warning']} ${AboutMeCss.botao__quem_sou}`}>About Me</button>
    </div>
   )
    

}

export default BotaoSobreMim