import React from 'react';

class SignIn extends React.Component {
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
        let url = 'http://localhost:3000/users/signin'

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
                <h2>Sign In</h2>
                <label htmlFor="SIname" >Username: </label>
                <input id="SIname" type="text" name="username" onChange={this.handleChange} />
                <label htmlFor="SIPass" >Password: </label>
                <input id="SIPass" type="password" name="password" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Sign In</button>
            </div>
        )
    }
}

export default SignIn;