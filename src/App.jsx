import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './constants';
import Home from './Home';
import Navigation from './Navigation';
import ServerVulnerabilties from './ServerVulnerabilities';
import Vulnerabilities from './Vulnerabilities';
import DomXSS from './Vulnerabilities/DomXSS';

const defaultState = {
  routes: {},
};

function App() {
  const [server, setServerInfo] = useState(defaultState);

  useEffect(() => {
    const getRoutes = async () => {
      try {
        const res = await axios.get('//localhost:3001/info');
        setServerInfo(res.data);
      } catch (err) {}
    };
    getRoutes();
  }, []);

  return (
    <Router>
      <Navigation server={server} />
      <Switch>
        <Route component={Home} exact path={ROUTES.INDEX} />

        <Route
          component={Vulnerabilities}
          exact
          path={ROUTES.VULNERABILTIES.INDEX}
        />
        <Route component={DomXSS} path={ROUTES.VULNERABILTIES.DOM_XSS} />

        {server.framework && (
          <Route
            render={(props) => (
              <ServerVulnerabilties {...props} server={server} />
            )}
            exact
            path={ROUTES.SERVER_VULNERABILTIES.INDEX}
          />
        )}
      </Switch>
    </Router>
  );
}

export default App;
