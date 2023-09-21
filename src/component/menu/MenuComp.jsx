import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './MenuComp.css';
import data from '../../menu.json'; 


export const MenuComp = () => {
    return (
        <div className='container'>
          <h2 className='titleSectionCard mt-5 ms-2 mb-4'>Menú<br /> Los especiales para hoy</h2>
          <Row xs={1} md={2} className="g-4">

            {data.platos.map( (platos, idx) => (
              <Col key={idx}>
                
                <div>                  
                  <Link to={`/APP-RESTAURANTE/PlateDetails/${platos.item}`}>
                    <Card className='bodyCard h-100'>
                      <Card.Body className='d-flex flex-column'>
                        
                        <Row>
                          <Col md={4} className='carImg'>
                            <Card.Img src={platos.imagen} alt={platos.item} className="cardImg" />
                          </Col>
                          <Col md={8}>
                            <Card.Title className='bodyCardTitle'>{platos.item}</Card.Title>                          
                            <Card.Text className='bodyCardParagraph'>{platos.description.length > 100 ? `${platos.description.slice(0, 140)}...` : platos.description}</Card.Text>
                            <Card.Text className="bodyCardPrice mt-auto">${platos.price}</Card.Text>   
                          </Col>
                        </Row>
            
                      </Card.Body>
                      <div className="triangle"></div> 
                    </Card>
                  </Link>
                </div>
                
              </Col>
            ))
            }

          </Row>
       
        </div>
      );
    };
