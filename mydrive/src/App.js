import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SignIn from './login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <SignIn />
      </div>
    );
  }
}

export default App;
