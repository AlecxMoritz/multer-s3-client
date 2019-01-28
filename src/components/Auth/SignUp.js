import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import APIURL from '../helpers/environment';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },

    container: {
        width: '45vw'
    }
});

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    validateForm = () => {
        // check 
    }

    handleSubmit = (event) => {
        let url = APIURL + '/users/signup'

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
        .catch(err => {
            this.setState({
                formErrors: 'Please fill out form completely'
            })
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <h1>Sign Up</h1>
                <p>All fields required</p>
                <TextField
                    onChange={this.handleChange}
                    name="email"
                    id="email"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="memelicious@sassycats.io"
                    required
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={this.handleChange}
                    name="username"
                    id="username"
                    label="Username"
                    style={{ margin: 8 }}
                    placeholder="cssIsAwesome42"
                    type="text"
                    fullWidth
                    required
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={this.handleChange}
                    name="password"
                    id="password"
                    label="Password"
                    style={{ margin: 8 }}
                    placeholder="LetMeIn!!"
                    fullWidth
                    required
                    type="password"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {/* <button onClick={this.handleSubmit}>Sign In</button> */}
                <Button onClick={this.handleSubmit} variant="outlined" className={classes.button}>
                    Sign Up
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(SignUp);