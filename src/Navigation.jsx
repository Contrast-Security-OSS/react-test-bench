import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <NavLink component={Navbar.Brand} to="/">
          React Test Bench
        </NavLink>
        <Navbar.Toggle aria-controls="navigation-nav" />
        <Navbar.Collapse id="navigation-nav">
          <Nav>
            <NavDropdown title="Browser Vulnerabilities">
              <NavLink component={NavDropdown.Item} to="/dom-xss">
                DOM XSS
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
