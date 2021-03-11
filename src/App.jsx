import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import DomXSS from './vulnerabilities/DomXSS';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dom-xss" component={DomXSS} />
      </Switch>
    </Router>
  );
}

export default App;
