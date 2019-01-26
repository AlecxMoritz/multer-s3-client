import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <h1>Sign Up</h1>
                <TextField
                    onChange={this.handleChange}
                    name="username"
                    id="outlined-full-width"
                    label="Username"
                    style={{ margin: 8 }}
                    placeholder="cssIsAwesome42"
                    // helperText="Full width!"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={this.handleChange}
                    name="password"
                    id="outlined-full-width"
                    label="Password"
                    style={{ margin: 8 }}
                    placeholder="LetMeIn!!"
                    // helperText="Full width!"
                    fullWidth
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