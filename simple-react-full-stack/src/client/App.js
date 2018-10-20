import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Login from './login.js';
import ButtonAppBar from './appbar.js';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  Button: {
    textAlign: 'right'
  },
};

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    //fetch('/api/getUsername')
      //.then(res => res.json());
  }
  

  render() {
    const { username } = this.state;
    return (
      <div>
	<ButtonAppBar/>
      	<Login/>
      </div>
    );
  }
}
