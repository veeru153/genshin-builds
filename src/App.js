import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Build from './components/Build/Build';
import Create from './components/Create/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/build" component={Build} />
          <Route exact path="/" component={Create} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
