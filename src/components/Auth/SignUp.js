import React from 'react';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        let url = 'http://localhost:3000/users/signup'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.props.setToken(data.sessionToken)
        })
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <label htmlFor="SUname" >Username: </label>
                <input id="SUname" type="text" name="username" onChange={this.handleChange} />
                <label htmlFor="SUpass" >Password: </label>
                <input id="SUpass" type="password" name="password" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Sign In</button>
            </div>
        )
    }
}

export default SignUp;