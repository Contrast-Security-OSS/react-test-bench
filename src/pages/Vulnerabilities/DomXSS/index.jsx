import Alert from 'react-bootstrap/Alert';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Page from '../../Page';
import styles from './DomXSS.module.css';

const SAMPLE_ATTACK = '<img src="" onerror="alert(\'gotcha!!\');">';

/**
 * @param {import('history').Location} location
 * @returns {import('history').LocationDescriptor}
 */
const dangerousLinkTo = (location) => ({
  pathname: location.pathname,
  hash: SAMPLE_ATTACK,
});

/**
 * @param {import('history').Location} location
 * @returns {import('history').LocationDescriptor}
 */
const safeLinkTo = (location) => ({
  pathname: location.pathname,
  search: SAMPLE_ATTACK,
});

const createInnerHTML = () => ({
  __html: decodeURIComponent(document.location.hash),
});

function DomXSS() {
  return (
    <Page title="DOM XSS | React Test Bench">
      <Row>
        <Col>
          <h1>DOM-based XSS attacks</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert variant="info">
            <Alert.Heading as="h4">Rule Information</Alert.Heading>
            Read about DOM-based XSS{' '}
            <Alert.Link
              href="https://owasp.org/www-community/attacks/DOM_Based_XSS"
              rel="noreferrer"
              target="_blank"
            >
              here
            </Alert.Link>
            .
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonGroup className={styles.buttons}>
            <Link
              className="btn btn-primary"
              replace
              to={safeLinkTo}
              variant="primary"
            >
              This can't hurt me!
            </Link>
            <Link
              className="btn btn-warning"
              replace
              to={dangerousLinkTo}
              variant="warning"
            >
              Exploit me!
            </Link>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>document.location</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            pathname: <code>{document.location.pathname}</code>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            search: <code>{decodeURIComponent(document.location.search)}</code>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            hash: <code dangerouslySetInnerHTML={createInnerHTML()} />
          </p>
        </Col>
      </Row>
    </Page>
  );
}

export default DomXSS;
