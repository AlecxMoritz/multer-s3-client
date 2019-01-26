import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

const Upvote = (props) => {
    const { classes } = props;
    return (
        <Button color="primary" onClick={() => props.upvote(props.imageId)} className={classes.button}>
            Upvote
      </Button>
        // <button onClick={() => props.upvote(props.imageId)}>Upvote</button>
    )
}

export default withStyles(styles)(Upvote);