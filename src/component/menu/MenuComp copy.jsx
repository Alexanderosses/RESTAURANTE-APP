import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './MenuComp.css';
import { menuPlate } from '../../utils/constvar.js';


export const MenuComp = () => {
    return (      
        <div className='container g-0'>
            <h2 className='titleSectionCard mt-5 ms-2 mb-4'>Menú. <br />Los especiales para hoy</h2>
            <Row xs={1} md={2} className="g-4">
                {menuPlate && menuPlate.map((especial) => (
                    <Col key={especial.item}>

                        <div>
                            <Link to={`/PlateDetails/${especial.item}`}>
                                <Card className='bodyCard h-100'>
                                    <Card.Body className='d-flex flex-column'>
                                        <Row>
                                            <Col md={4} className='carImg'>
                                                <Card.Img src={especial.imagen} alt={especial.item} className="cardImg" />
                                            </Col>
                                            <Col md={8}>
                                                <Card.Title className='bodyCardTitle'>{especial.item}</Card.Title>
                                                <Card.Text className='bodyCardParagraph'>
                                                    {especial.description.length > 100 ? `${especial.description.slice(0, 140)}...` : especial.description}
                                                </Card.Text>
                                                <Card.Text className="bodyCardPrice mt-auto">${especial.price}</Card.Text>
                                            </Col>
                                        </Row>
                                        
                                    </Card.Body>
                                    <div className="triangle"></div>
                                </Card>
                            </Link>
                        </div>

                    </Col>
                ))}
            </Row>
        </div>
    );
};
