import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import Page from '../Page';

function Vulnerabilities() {
  return (
    <Page title="Browser Vulnerabilities">
      <Row>
        <Col>
          <h1>React Test Bench</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>
              <Link to={ROUTES.VULNERABILTIES.DOM_XSS}>DOM XSS</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Page>
  );
}

export default Vulnerabilities;
