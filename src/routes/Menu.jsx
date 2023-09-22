import { MenuComp } from "../component/menu/MenuComp";
import { ContactComp } from "../component/contact/ContactComp";
import { FooterComp } from "../component/footer/FooterComp";

export const Menu = () => {
  return (
    <div className="container">
      <div className="ptop"></div>
      <MenuComp />
      <ContactComp />
      <FooterComp />
    </div>
  )
}


