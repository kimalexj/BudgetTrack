import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import home from './components/Home/home';

class App extends Component {
  state = {
    loggedIn: false
  }

  login = () => {
    this.setState({
      loggedIn: true
    })
    console.log(this.state);
  } 

  // Example of server communication
  componentDidMount() {
    fetch('/login')
        .then(data => console.log(data.text()))
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar loggedIn={this.state.loggedIn}/>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/dashboard/:user" component={dashboard} />
            <Route path="/login" component={() => <SignIn handleLogin={this.login}/>} />
            <Route path="/register" component={SignUp}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
