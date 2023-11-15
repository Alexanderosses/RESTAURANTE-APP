import { CarouselComp } from '../component/carousel/CarouselComp.jsx';
import { CardComp } from '../component/cards/CardComp';
import { FooterComp } from '../component/footer/FooterComp';
import { ContactComp } from '../component/contact/ContactComp';
import { Container } from 'react-bootstrap';

export const Home = () => {
    return(
        <Container fluid className='g-0'>
            <CarouselComp />
            <div className='container'>
                <CardComp />
                <ContactComp />
                <FooterComp />
            </div>
        </Container>
    )
}