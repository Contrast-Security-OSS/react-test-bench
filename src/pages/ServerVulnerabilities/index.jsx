import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Page from '../Page';

/**
 * @param {Object} props
 * @param {Object} props.server
 * @param {string} props.server.framework
 * @param {{ [route: string]: import('@contrast/test-bench-utils').Route}} props.server.routes
 */
function ServerVulnerabilties({ server }) {
  const title = `${server.framework} Vulnerabilities`;

  const vulnerabilities = Object.values(server.routes).map((route) => (
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
    <Page title={title}>
      <Row>
        <Col>
          <h1>{server.framework} Test Bench</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>{vulnerabilities}</ul>
        </Col>
      </Row>
    </Page>
  );
}

export default ServerVulnerabilties;
