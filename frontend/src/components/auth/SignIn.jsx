import React, { Component } from 'react'

export class SignIn extends Component {
    state = {
        email:"",
        password:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        
        // TODO: Perform user auth here (POST response on express backend to Firebase)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form action="" onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text darken-3">Login</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn
