import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Space from './components/space/space.js';
import Footer from './partials/footer/footer.js';
import NavBar from './partials/navbar/navbar.js';
import SideBar from './partials/sidebar/sidebar.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Space />
      <SideBar />

      <Switch>
        <Redirect from='*' to='/404' />
      </Switch>

      <Footer />
    </Router>

  );
}

export default App;
