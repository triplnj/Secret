import React from 'react'; 
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login"


function App() {
    return ( 
      <div className = "App" >
        <Router>
          <Header />
          <Switch>            
            <Route exact path="/detail">
              <Detail />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch> 
        </Router>       
      
        </div>
    );
}

export default App;