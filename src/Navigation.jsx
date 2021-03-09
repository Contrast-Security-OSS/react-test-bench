import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <NavLink component={Navbar.Brand} to="/">
        React Test Bench
      </NavLink>
      <Navbar.Toggle aria-controls="navigation-nav" />
      <Navbar.Collapse id="navigation-nav">
        <Nav>
          <NavDropdown title="Vulnerabilities">
            <NavLink component={NavDropdown.Item} to="/dom-xss">
              DOM XSS
            </NavLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
