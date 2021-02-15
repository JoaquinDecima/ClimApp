import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import NavBar from './partials/navbar/navbar.js';
import SideBar from './partials/sidebar/sidebar.js';

function App() {
  return (
    <Router>
      <NavBar />
      <SideBar />

      <Switch>
        <Redirect from='*' to='/404' />
      </Switch>

    </Router>

  );
}

export default App;
