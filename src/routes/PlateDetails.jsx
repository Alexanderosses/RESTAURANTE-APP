import { useParams } from "react-router-dom";
import { menuPlate } from '../constvar.js'; 
import { ContactComp } from "../component/contact/ContactComp"
import { FooterComp } from "../component/footer/FooterComp"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const PlateDetails = () => {
    const { item } = useParams();
    const planSelected = menuPlate.find(menu => menu.item === item);

    if (!planSelected) {
        return <div>Plato no encontrado</div>;
    }

    return (
        <div className="mt-5">
            <div className="ptop"></div>
            <div className='container'>    
            <h2 className='titleSectionCard mt-5 ms-2 mb-4'>Menú<br/>El detalle</h2>
                <Card className='bodyCard h-100'>
                    <Card.Body className='d-flex flex-column'>
                        <Row>
                            <Col md={6} className='carImg'>
                                <Card.Img src={planSelected.imagen} alt={planSelected.item} className="cardImg" />
                            </Col>
                            <Col md={6}>
                                <Card.Title className='bodyCardTitle'>{planSelected.item}</Card.Title>
                                <Card.Text className='bodyCardParagraph'>{planSelected.description}</Card.Text>
                                <Card.Text className="bodyCardPrice mt-auto"> Valor ${planSelected.price}</Card.Text>
                            </Col>                           
                        </Row>                        
                    </Card.Body>
                </Card>
            </div>

            <ContactComp />
            <FooterComp />
        </div>
    );
}
