import React from 'react';
import Upvote from '../Shared/Upvote';
import Downvote from '../Shared/Downvote';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 600,
        height: 700,
        margin: 'auto'
    },
    media: {
        height: 500,
    },
};

const FeedImage = (props) => {
    const { classes } = props;
    const image = props.image;
    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`http://localhost:3000/images/${image.id}`}
                    />
                    <CardContent>
                        <Typography component="p">
                            <h4>{image.posted_by}</h4>
                            <Upvote upvote={props.upvote} imageId={image.id} />
                            <Downvote downvote={props.downvote} imageId={image.id} />
                            <p>{image.votes}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

FeedImage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedImage);