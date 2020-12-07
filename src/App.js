import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Build from './components/Build/Build';
import Create from './components/Create/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/build" component={Build} />
          <Route path="/" component={Create} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
