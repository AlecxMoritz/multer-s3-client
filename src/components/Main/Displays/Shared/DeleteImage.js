import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import APIURL from '../../../helpers/environment';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class DeleteImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageId: ''
        }
    }

    componentDidMount() {
        this.setState({
            imageId: this.props.imageId
        })
    }

    handleClick = () => {
        let url = APIURL + `/images/${this.state.imageId}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => {
                this.props.fetchImages();
            })
            .catch(err => console.log(err));
    }

    render() {
        const { classes } = this.props;
        return (
            // <button onClick={this.handleClick}>Delete This Image</button>
            <Button variant="outlined" color="secondary" onClick={this.handleClick} className={classes.button}>
                Delete Image
            </Button>
        )
    }
}

export default withStyles(styles)(DeleteImage);