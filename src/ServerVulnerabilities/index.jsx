import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from '../Vulnerabilities/Vulnerability.module.css';

/**
 * @param {Object} props
 * @param {Object} props.server
 * @param {string} props.server.framework
 * @param {{ [route: string]: import('@contrast/test-bench-utils').Route}} props.server.routes
 */
function ServerVulnerabilties({ server }) {
  const vulns = Object.values(server.routes).map((route) => (
    <li key={route.base}>
      <a
        href={`//localhost:3001${route.base}`}
        rel="noreferrer"
        target="_blank"
      >
        {route.name}
      </a>
    </li>
  ));

  return (
    <Container as="main" className={styles.vulnerability}>
      <Row>
        <Col>
          <h1>{server.framework} Test Bench</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>{vulns}</ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ServerVulnerabilties;
