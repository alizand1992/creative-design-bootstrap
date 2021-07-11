import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './index.css';

import { Link } from 'react-scroll';

const Menu = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="branding">
        <Nav.Link as="div">
          <Link to="home" spy={true} smooth={true}>
            Creative<br />
            Design
          </Link>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle area-controls="main-menu" />
      <Navbar.Collapse id="main-menu">
        <Nav.Link as="div" className="menu-item">
          <Link to="about" spy={true} smooth={true}>
            <div> ABOUT US</div>
          </Link>
        </Nav.Link>
        <Nav.Link as="div" className="menu-item">
          <Link to="services" spy={true} smooth={true}>OUR SERVICES</Link>
        </Nav.Link>
        <Nav.Link as="div" className="menu-item">
          <Link to="contact" spy={true} smooth={true}>CONTACT US</Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
