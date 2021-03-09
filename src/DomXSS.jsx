import { Link } from 'react-router-dom';

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
