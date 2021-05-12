import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import api from './api';
import { ROUTES } from './constants';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ServerVulnerabilties from './pages/ServerVulnerabilities';
import Vulnerabilities from './pages/Vulnerabilities';
import DomXSS from './pages/Vulnerabilities/DomXSS';

const defaultState = {
  routes: [],
};

function App() {
  const [server, setServer] = useState(defaultState);

  useEffect(() => {
    const getRoutes = async () => {
      try {
        const res = await api.get('/info');
        setServer(res.data);
      } catch (err) {
        console.warn(
          'An error occurred when connecting to the Node test bench.\n%o',
          err
        );
      }
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
