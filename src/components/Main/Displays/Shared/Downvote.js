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

const Downvote = (props) => {
    const { classes } = props;
    return (
        <Button color="secondary" onClick={() => props.downvote(props.imageId)} className={classes.button}>
            Downvote
        </Button>
    )
}

export default withStyles(styles)(Downvote);