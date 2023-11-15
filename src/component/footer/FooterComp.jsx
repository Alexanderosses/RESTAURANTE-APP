import '../../app.css';
import logo_small from '../../assets/logo_small.png';
import Container from 'react-bootstrap/Container';

export const FooterComp = () => {
  return (
    <Container className="mx-auto footer">
        <div className='footer100'><img src={logo_small} alt='Imagen Logo' className='footerLogo' /> <span className="footerText1"> Restobar </span> <span className="footerText2 footerMl"> |  2023 © Todos los derechos reservados </span> </div>
        <div className='footer100'> <span className="footerText2">Diseñado por </span> <span className="footerText1 footerMl"> Alexander Osses</span> </div>
    </Container>
  )
}