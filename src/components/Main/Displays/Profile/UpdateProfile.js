import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class UpdateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: this.props.bio,
            status: this.props.status
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, console.log(this.state))
    }

    handleClick = () => {
        let url = "http://localhost:3000/users/profile";

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            },
            body: JSON.stringify({
                user: {
                    bio: this.state.bio,
                    status: this.state.status
            }}) 
        })
        .then(response => response.json())
        .then(data => this.props.fetchUserInfo())
        .catch(err => console.log(err))
        // console.log(this.state)
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button onClick={this.handleOpen}>Edit Profile</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <Typography variant="h6" id="modal-title">
                                Update Profile
                </Typography>

                            <TextField
                                id="standard-name"
                                value={this.state.status}
                                name="status"
                                label="status"
                                defaultValue={this.state.status}
                                className={classes.textField}
                                // placeholder={this.state.user.status}
                                value={this.state.name}
                                onChange={this.handleChange}
                                margin="normal"
                            />
                            <Typography variant="subtitle1" id="simple-modal-description">
                                Bio
                        </Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                value={this.state.bio}
                                multiline
                                name="bio"
                                defaultValue={this.state.bio}
                                rowsMax="4"
                                value={this.state.multiline}
                                onChange={this.handleChange}
                                className={classes.textField}
                                margin="normal"
                            />
                            <Button color="primary" className={classes.button} onClick={this.handleClick}>
                                Update
                             </Button>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}

UpdateProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

// const UpdateProfileWrapped = withStyles(styles)(UpdateProfile)

export default withStyles(styles)(UpdateProfile);