import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Auth extends React.Component {
    render() {
        return (
            <div>
                <SignIn setToken={this.props.setToken}/>
                <SignUp setToken={this.props.setToken}/>
            </div>
        )
    }
}

export default Auth;