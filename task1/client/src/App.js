import React from 'react'
import './App.css';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import MainPage from './Pages/MainPage';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import PopUp from './Pages/PopUp'
import UserForm from './Pages/UserForm'

function App() {

  
  
  return (
    <div className="app">
      <Router>
        <Switch>
        
          <Route path='/' >
            
            <MainPage>
              
            </MainPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
