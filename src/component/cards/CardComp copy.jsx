// BOOTSTRAP
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// OWN
import './CardComp.css';
import { menuPlate } from '../../utils/constvar.js'; 
import { Link } from 'react-router-dom';


export const CardComp = () => {
    // Obtén los primeros 6 elementos del array menuplate
    const primerosSeisEspeciales = menuPlate.slice(0, 6); 

    return (
        <div className='container'>
          <h2 className='titleSectionCard mt-5 ms-2 mb-4'>Los especiales <br />para hoy</h2>
          <Row xs={1} md={2} className="g-4">
            {primerosSeisEspeciales.map((especial, idx) => (
              <Col key={idx}>
                
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
                            <Card.Text className='bodyCardParagraph'>{especial.description.length > 100 ? `${especial.description.slice(0, 140)}...` : especial.description}</Card.Text>
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
          <div className='cardButton'>
            <Link to='/menu'>
              <button className='button'>TODO EL MENÚ</button>
           </Link>
          </div>             
        </div>
      );
    };
        
