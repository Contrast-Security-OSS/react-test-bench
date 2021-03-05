import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import DomXSS from './DomXSS';
import Home from './Home';

function App() {
  return (
    <Router>
      <nav className="Menu">
        <Link to="/">React Test Bench</Link>
        <ul>
          <Link to="/dom-xss">DOM XSS</Link>
        </ul>
      </nav>
      <main className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dom-xss" component={DomXSS} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
