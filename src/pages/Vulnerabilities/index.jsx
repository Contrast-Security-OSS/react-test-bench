import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
import Page from '../Page';

function Vulnerabilities() {
  return (
    <Page title="Browser Vulnerabilities">
      <h1>React Test Bench</h1>
      <ul>
        <li>
          <Link to={ROUTES.VULNERABILTIES.DOM_XSS}>DOM XSS</Link>
        </li>
      </ul>
    </Page>
  );
}

export default Vulnerabilities;
