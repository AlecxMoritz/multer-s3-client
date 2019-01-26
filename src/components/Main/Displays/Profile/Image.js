import React from 'react';
import DeleteImage from '../Shared/DeleteImage';
import UpdateImage from '../Shared/UpdateImage';
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
        height: 400,
    },
};

const Image = (props) => {
    const image = props.image;
    const { classes } = props;
    return (
        <div >
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`http://localhost:3000/images/${image.id}`}
                    />
                    <CardContent>
                        <Typography component="p">
                            <DeleteImage imageId={image.id} fetchImages={props.fetchImages} />
                            <UpdateImage imageId={image.id} fetchImages={props.fetchImages} />
                            <p>{image.votes}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

Image.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Image);