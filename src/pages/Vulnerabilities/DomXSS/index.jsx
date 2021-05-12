import Alert from 'react-bootstrap/Alert';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import Page from '../../Page';

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
      <h1>DOM-based XSS attacks</h1>
      <Alert variant="info">
        <Alert.Heading as="h4">Rule Information</Alert.Heading>
        Read about DOM-based XSS{' '}
        <Alert.Link
          href="https://owasp.org/www-community/attacks/DOM_Based_XSS"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </Alert.Link>
        .
      </Alert>
      <h3>document.location</h3>
      <p>
        pathname: <code>{document.location.pathname}</code>
      </p>
      <p>
        search: <code>{decodeURIComponent(document.location.search)}</code>
      </p>
      <p>
        hash: <code dangerouslySetInnerHTML={createInnerHTML()} />
      </p>
      <ButtonGroup>
        <Link className="btn btn-primary" replace to={safeLinkTo}>
          This can't hurt me!
        </Link>
        <Link className="btn btn-warning" replace to={dangerousLinkTo}>
          Exploit me!
        </Link>
      </ButtonGroup>
    </Page>
  );
}

export default DomXSS;
