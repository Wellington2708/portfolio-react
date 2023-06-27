function Logo(){
    const logoWellington = require('./logo2.png');

    return (
    <div>
        <h1><img src={logoWellington} alt="logo Wellington Junior Developer Front-End" className="cabecalho__logo"/></h1>
    </div>
    );
}

export default Logo