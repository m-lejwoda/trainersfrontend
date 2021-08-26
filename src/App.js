import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import HomePage from './components/HomePage';
import Reservation from './components/Reservation';
import Navbar from './components/Navbar';
import Policy from './components/Policy';
import Footer from './components/Footer';
import ReservationEvent from './components/ReservationEvent';
import Transformations from './components/Transformations';
import {connect} from 'react-redux';
import {get_trainers,get_packages,get_threetransformations
,get_all_transformations} from './redux/actions/trainerActions'

function App(props) {
  useEffect(()=>{
    props.get_trainers()
    props.get_packages()
    props.get_threetransformations()
    props.get_all_transformations()
},[])

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
          <Route path="/policy">
            <Policy />
          </Route>
          <Route path="/transformations">
            <Transformations />
          </Route>
          <Route path="/reservationtoplan/:planid/:username/:useremail/:userphone/:usertrainer">
            <ReservationEvent />
          </Route>
        </Switch>
        <Footer />
      
    </Router>

  );
}
const mapStateToProps = (state) => {
  return{
  trainers: state.trainer.trainers,
  loadedtrainers: state.trainer.trainers.loadedtrainers
}}
export default connect(mapStateToProps,{get_trainers,get_packages,get_threetransformations,get_all_transformations})(App);