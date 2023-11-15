import { MenuComp } from "../component/menu/MenuComp";
import { ContactComp } from "../component/contact/ContactComp";
import { FooterComp } from "../component/footer/FooterComp";
import { Container } from "react-bootstrap";

export const Menu = () => {
  return (
    <Container>
      <div className="ptop"></div>
      <MenuComp />
      <ContactComp />
      <FooterComp />
    </Container>
  )
}


