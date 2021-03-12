import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import Home from './Home';
import Navigation from './Navigation';
import ServerVulnerabilties from './ServerVulnerabilities';
import Vulnerabilities from './Vulnerabilities';
import DomXSS from './Vulnerabilities/DomXSS';

function App() {
  const [serverRoutes, setServerRoutes] = useState({});

  useEffect(() => {
    const getRoutes = async () => {
      const res = await axios.get('//localhost:3001/routes');
      setServerRoutes(res.data.routes);
    };
    getRoutes();
  }, []);

  return (
    <Router>
      <Navigation serverRoutes={serverRoutes} />
      <Switch>
        <Route component={Home} exact path={ROUTES.INDEX} />

        <Route
          component={Vulnerabilities}
          exact
          path={ROUTES.VULNERABILTIES.INDEX}
        />
        <Route component={DomXSS} path={ROUTES.VULNERABILTIES.DOM_XSS} />

        <Route
          render={(props) => (
            <ServerVulnerabilties {...props} serverRoutes={serverRoutes} />
          )}
          exact
          path={ROUTES.SERVER_VULNERABILTIES.INDEX}
        />
      </Switch>
    </Router>
  );
}

export default App;
