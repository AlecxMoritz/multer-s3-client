import React, { Component } from 'react';
import './App.css';

import Auth from './components/Auth/Auth';
import Home from './components/Main/Home';
import Appbar from './components/Main/Appbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  componentDidMount() {
    if(localStorage.getItem('token') !== '') {
      this.setSessionState(localStorage.getItem('token'));
    }
  }

  setSessionState = (sessionToken) => {
    localStorage.setItem('token', sessionToken);
    this.setState({
      sessionToken: sessionToken
    })
  }

  logout = () => {
    localStorage.setItem('token', '');
    this.setState({
      sessionToken: ''
    })
  }

  render() {

    const protectedViews = !this.state.sessionToken ? <Auth setToken={this.setSessionState}/> : <Home logout={this.logout}/>

    return (
      <div >
        <Appbar />
        {protectedViews}
      </div>
    );
  }
}

export default App;
