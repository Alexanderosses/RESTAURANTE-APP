import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../../app.css';
import data from '../../menu.json'; 
import { Container } from 'react-bootstrap';


export const MenuComp = () => {
    return (
        <Container>
          <h2 className='titleSectionCard mt-5 ms-2 mb-4'>Menú<br /> Los especiales para hoy</h2>
          <Row xs={1} md={2} className="g-4">

            {data.platos.map( (platos, idx) => (
              <Col key={idx}>
                
                <div>                  
                  <Link to={`/PlateDetails/${platos.item}`}>
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
       
        </Container>
      );
=======
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const MenuComp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-node-tienda.onrender.com/v1/post');
        if (response.data.message === 'Posts') {
          setProducts(response.data.detail);
        } else {
          console.error('Respuesta de la API inesperada:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
>>>>>>> ee46f23c73fb8a456005d1a85776ec40f7429922
    };

    fetchData();
  }, []);

  // Función para truncar la descripción a 150 caracteres
  const truncateDescription = (description) => {
    if (description.length > 150) {
      return description.substring(0, 150) + '...';
    }
    return description;
  };
 
    // Función para formatear el precio a millones con separadores de puntos
    const formatPrice = (price) => {
      return price.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'CLP',
      });
    };

  return (
      <div>
      <h2 className="titleSection">Todos los modelos </h2>
          <Row>
            {products.map((product) => (
              <Col key={product._id} xs={12} md={6} lg={6} xl={6}>
                <Card style={{ marginBottom: '20px' }}>
                  <Row>
                    <Col xs={12} md={6} lg={6} xl={6}>
                      <Card.Img src={product.img} style={{ height: '250px', width: '250px', objectFit: 'cover' }} />
                    </Col>
                    <Col xs={12} md={6} lg={6} xl={6}>
                      <Card.Body>
                        <Card.Text><small><strong>{product.marca}</strong></small></Card.Text>
                        <Card.Title>{product.modelo}</Card.Title>
                        <Card.Text>
                          Precio: $ {formatPrice(product.precio)}
                          <br />
                          Precio de oferta: $ {formatPrice(product.precioOferta)}
                          <br />
                          Descuento: {product.descuento}%
                          <br />
                          <small>{truncateDescription(product.descripcion)}</small>
                        </Card.Text>
                        <Link to={`/ProductDetails/${product.modelo}`}>
                          <Button variant="primary btn-own">
                            MÁS INFO
                          </Button>
                        </Link>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
  );
};
