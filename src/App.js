import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Space from './components/space/space.js';
import City from './pages/city/city.js';
import Home from './pages/home/home.js';
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
        <Route path="/city/:id" component={City} />
        <Route path="/" component={Home} />
        <Redirect from='*' to='/404' />
      </Switch>

      <Footer />
    </Router>

  );
}

export default App;
