import { Link, NavLink, matchPath, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ROUTES } from '../constants';

/**
 * @param {Object} props
 * @param {import('history').Location} props.location
 * @param {Object} props.server
 * @param {string} props.server.framework
 */
function Navigation({ location, server }) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Link className="navbar-brand" to={ROUTES.INDEX}>
          React Test Bench
        </Link>
        <Navbar.Toggle aria-controls="nav-collapse" />
        <Navbar.Collapse id="nav-collapse">
          <Nav>
            <NavDropdown
              active={matchPath(location.pathname, {
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
              <NavDropdown.Divider />
              <NavLink
                className="dropdown-item"
                to={ROUTES.VULNERABILTIES.DOM_XSS}
              >
                DOM XSS
              </NavLink>
            </NavDropdown>
            {server.framework ? (
              <NavLink
                className="nav-link"
                exact
                to={ROUTES.SERVER_VULNERABILTIES.INDEX}
              >
                {server.framework} Vulnerabilities
              </NavLink>
            ) : (
              <Nav.Link disabled="true">Server Vulnerabilities</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(Navigation);
