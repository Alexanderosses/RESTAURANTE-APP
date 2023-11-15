// OWN
import { Container } from "react-bootstrap";
import { ContactComp } from "../component/contact/ContactComp";
import { FooterComp } from "../component/footer/FooterComp";
import { ReserComp } from "../component/reser/ReserComp";

export const Reservation = () => {
  return (
    <Container className="">
      <div className="ptop"></div>
      <h2 className='titleAbout mt-5 mb-4'>RESERVA<br />TE ESPERAMOS!...</h2>
      <div className="reservation" id='about'>
          
          <p className="textReservation col-md-8 mx-auto my-5">
            ¡Reserva ahora y asegura tu lugar en una experiencia culinaria inolvidable! Disfruta de nuestra deliciosa gastronomía en un entorno acogedor. 
            Ya sea una cena romántica o una reunión con amigos, garantizamos un servicio excepcional y platos que deleitarán tu paladar. 
            ¡Haz tu reserva hoy y déjanos cuidar de cada detalle mientras tú te relajas y saboreas momentos únicos en nuestro restaurante!
          </p>

          <div className="col-md-8 mx-auto">
            <ReserComp />
          </div>

      </div>
      <ContactComp />
      <FooterComp />
    </Container>
  )
}
