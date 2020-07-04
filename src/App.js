import React from 'react';
import Login from './Components/Login'
import Help from './Components/Help'
import Bitul from './Components/Bitul'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Login}/>
          <Route exact path="/home/" component={Help}/>
          <Route exact path="/bitul/" component={Bitul}/>
      </div>
    </Router>
  );
}

export default App;
