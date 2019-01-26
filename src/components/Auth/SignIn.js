import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        let url = 'http://localhost:3000/users/signin'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ user: this.state }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.props.setToken(data.sessionToken)
            })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <h1>Sign In</h1>
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
                <Button onClick={this.handleSubmit} variant="outlined" className={classes.button}>
                    Sign In
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(SignIn);