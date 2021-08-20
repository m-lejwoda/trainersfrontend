import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
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
import {connect} from 'react-redux';
import {get_trainers,get_packages} from './redux/actions/trainerActions'

function App(props) {
  useEffect(()=>{
    props.get_trainers()
    props.get_packages()
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
          <Route>
            <Policy />
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
export default connect(mapStateToProps,{get_trainers,get_packages})(App);