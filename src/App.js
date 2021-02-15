import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import NavBar from './partials/navbar/navbar.js';

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Redirect from='*' to='/404' />
      </Switch>

    </Router>

  );
}

export default App;
