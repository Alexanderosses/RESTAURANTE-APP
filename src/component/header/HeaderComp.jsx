// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// OWN
import './HeaderComp.css'
import {menuList} from '../../utils/constvar.js'; 
import logo from '../../assets/logo-app.png';
import { Link } from 'react-router-dom';

export const HeaderComp = ( {menuFrase} ) => {
    const frase = menuFrase[0]?.item || '';
    return (
        <div className='container-fluid g-0 fixed'>
            <Navbar.Brand className='headerLogo justify-content-center'>
                <Link to='/APP-RESTAURANTE/'>
                    <img src={logo} alt='Imagen Logo' className='logoHeader' />
                </Link>
                <div className='frase'>{frase}</div>
            </Navbar.Brand>

            <Navbar expand="lg" className="headerMenu">                
                <Navbar.Toggle aria-controls="basic-navbar-nav"> <strong className='menu-text'>MENÚ</strong> </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto justify-content-center">
                        {menuList.map((menu, index) => (
                        <Nav.Link as={Link} to={menu.url} key={index} className='menu'>
                            {menu.item}
                        </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <div className='headerMenuTriangleTop'></div>
        </div>
    );
};