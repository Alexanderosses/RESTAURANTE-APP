import { CarouselComp } from '../component/carousel/CarouselComp.jsx';
import { FooterComp } from '../component/footer/FooterComp';
import { ContactComp } from '../component/contact/ContactComp';
import { Container } from 'react-bootstrap';
<<<<<<< HEAD

export const Home = () => {
    return(
=======
import { ProductList } from '../component/product/ProductList.jsx';

export const Home = () => {
    return(
        <>
>>>>>>> ee46f23c73fb8a456005d1a85776ec40f7429922
        <Container fluid className='g-0'>
            <CarouselComp />
            <div className='container'>
                <ProductList />
            </div>
        </Container>
<<<<<<< HEAD
=======
        <ContactComp />
        <FooterComp />
        </>
>>>>>>> ee46f23c73fb8a456005d1a85776ec40f7429922
    )
}