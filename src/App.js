import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/HomePage';
import Reservation from './components/Reservation';
import Navbar from './components/Navbar';
import Policy from './components/Policy';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
          <Route path="/navbar">
            <Navbar />
          </Route>
          <Route>
            <Policy />
          </Route>
        </Switch>
        <Footer />
      
    </Router>

  );
}

export default App;
