import React, { Component} from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Navbar from './component/Layout/Navbar';
import'./App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
      
      <Router>
      
      <div className="App">
        <Route exact path="/menu" component={Navbar}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
