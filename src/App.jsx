import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DomXSS from './DomXSS';
import Home from './Home';
import Navigation from './Navigation';

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
