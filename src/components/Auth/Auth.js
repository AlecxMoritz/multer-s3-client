import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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