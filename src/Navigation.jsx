import { Link, NavLink, matchPath, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ROUTES } from './constants';

/**
 * @param {Object} props
 * @param {import('history').Location} props.location
 */
function Navigation(props) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Link
          // as={Navbar.Brand} throws a propType warning
          className="navbar-brand"
          to={ROUTES.INDEX}
        >
          React Test Bench
        </Link>
        <Navbar.Toggle aria-controls="nav-collapse" />
        <Navbar.Collapse id="nav-collapse">
          <Nav>
            <NavDropdown
              active={matchPath(props.location.pathname, {
                path: ROUTES.VULNERABILTIES.INDEX,
              })}
              id="nav-browser-vulns"
              title="Browser Vulnerabilities"
            >
              <NavLink
                className="dropdown-item"
                exact
                to={ROUTES.VULNERABILTIES.INDEX}
              >
                Index
              </NavLink>
              <NavLink
                className="dropdown-item"
                to={ROUTES.VULNERABILTIES.DOM_XSS}
              >
                DOM XSS
              </NavLink>
            </NavDropdown>
            <NavLink
              // as={Nav.Link} throws a propType warning
              className="nav-link"
              exact
              to={ROUTES.SERVER_VULNERABILTIES.INDEX}
            >
              Server Vulnerabilities
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(Navigation);
