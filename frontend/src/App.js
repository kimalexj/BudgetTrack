import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

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
          <Switch>
            <Route exact path="/" component={dashboard} />
            <Route path="/login" component={SignIn}/>
            <Route path="/register" component={SignUp}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
