import { Link } from 'react-router-dom';

const DANGEROUS_USER_INPUT = '<img src="" onerror="alert(\'gotcha!!\');">';

/**
 * @param {import('history').Location} location
 * @returns {import('history').LocationDescriptor}
 */
const dangerousLinkTo = (location) => ({
  pathname: location.pathname,
  hash: DANGEROUS_USER_INPUT,
});

/**
 * @param {import('history').Location} location
 * @returns {import('history').LocationDescriptor}
 */
const safeLinkTo = (location) => ({
  pathname: location.pathname,
  search: DANGEROUS_USER_INPUT,
});

const createDangerousHash = () => ({
  __html: decodeURIComponent(document.location.hash),
});

function DomXSS() {
  return (
    <div className="Vulnerability">
      <Link to={safeLinkTo} replace>
        This can't hurt me!
      </Link>
      <Link to={dangerousLinkTo} replace>
        Exploit me!
      </Link>
      <p className="safe">
        search: <code>{decodeURIComponent(document.location.search)}</code>
      </p>
      <p className="dangerous">
        hash: <code dangerouslySetInnerHTML={createDangerousHash()} />
      </p>
    </div>
  );
}

export default DomXSS;
