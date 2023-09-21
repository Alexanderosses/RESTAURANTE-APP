import { AboutComp } from "../component/about/AboutComp"
import { ContactComp } from "../component/contact/ContactComp"
import { FooterComp } from "../component/footer/FooterComp"

export const Aboutus = () => {
  return (
    <div className="container g-0">
      <div className="ptop"></div>
      <AboutComp />
      <ContactComp />
      <FooterComp />
    </div>
  )
}

