import React from 'react';
import './App.css';
import FAQ from './components/FAQ'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';

 class App extends React.Component{

   render(){
    return(
      <Router>
        <Route exact path="/">
          <Nav />
          <FAQ />
        </Route>
      </Router>
    );  
    }
 }

export default App;
