import React, { Component} from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/layout/Landing';
import'./App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={ Landing }/> 
      
       
      </div>
      </Router>
    );
  }
}

export default App;
