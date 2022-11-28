import cart from '../../images/cart.png'
import login from '../../images/login.png'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import logo from '../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

function NavebarPage() {
  return (
    
      <Navbar className='sticky-top ' bg="dark" variant='dark' expand='sm'>
      <Container>
        <Navbar.Brand >
          <a href='/'>
          <img src={logo} className='logo'/>
          </a>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 w-100 taxt-center"
              aria-label="Search"
            />
            <Nav className="me.auto">
                <Nav.Link href='/cart'
                className='nav-text d-flex mt.3 justify-contet-center'
                style={{color:"white"}}>
                    <img src={cart} className='login-img' alt='sfvs'/>
                    <p style={{color:"white"}}>العربة</p>
                </Nav.Link>
                <Nav.Link href='/login'
                className='nav-text d-flex mt.3 justify-contet-center '
                style={{color:"white"}}>
                    <img src={login} className='login-img' alt='sfvs'/>
                    <p style={{color:"white"}}>الدخول</p>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default NavebarPage;