import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  login(){
    axios.post('http://localhost:3500/users/login')
  }
  render(){
    return (
      <div>
        <input placeholder='Your username' onChange={() => this.setState({ username })} />
        <input placeholder='Your password' onChange={() => this.setState({ password })} />
        <button onKeyPress={this.login.bind(this)}>Login</button>
      </div>
    );
  }
}