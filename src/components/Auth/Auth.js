import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import SignIn from './SignIn';
import SignUp from './SignUp';

const styles = theme => ({
    container: {
        width: '50%',
        margin: 'auto',
        textAlign: 'center',
        marginTop: '20vh'
    },

    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});
class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
    }

    toggle = () => {
        this.setState({
            login: !this.state.login
        })
    }

    render() {
        const { classes } = this.props;
        const text = this.state.login ? 'Need an account?' : 'I have an account';
        const form = this.state.login === true ? <SignIn setToken={this.props.setToken} /> : <SignUp setToken={this.props.setToken} />


        return (
            <div className={classes.container}>
                <div>
                    <Paper className={classes.root} elevation={12}>
                        {/* <SignIn setToken={this.props.setToken} />
                        <SignUp setToken={this.props.setToken} /> */}
                        {form}
                        <p onClick={this.toggle}>{text}</p>
                    </Paper>
                </div>
            </div>
        )
    }
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Auth);