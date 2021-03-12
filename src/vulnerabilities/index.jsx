import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import styles from './Vulnerability.module.css';

function Vulnerabilities() {
  return (
    <Container as="main" className={styles.vulnerability}>
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
    </Container>
  );
}

export default Vulnerabilities;
