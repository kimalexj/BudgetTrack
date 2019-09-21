import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar'

class App extends Component {
  state = {
    loggedIn: false
  }

  login = () => {
    this.setState({
      loggedIn: true
    })
  } 

  logout = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar loggedIn={this.state.loggedIn} handleLogin={this.login}/>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
