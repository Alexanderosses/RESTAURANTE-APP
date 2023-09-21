import { CarouselComp } from '../component/carousel/CarouselComp.jsx';
import { CardComp } from '../component/cards/CardComp';
import { FooterComp } from '../component/footer/FooterComp';
import { ContactComp } from '../component/contact/ContactComp';

export const Home = () => {
    return(
        <div>
            <CarouselComp />
            <div className='container'>
                <CardComp />
                <ContactComp />
                <FooterComp />
            </div>
        </div>
    )
}