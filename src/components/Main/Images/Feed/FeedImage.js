import React from 'react';
import Upvote from '../Upvote';
import Downvote from '../Downvote';

const styles = {
    wrapper: {
        width: '40%',
        margin: 'auto',
        display: 'flex'
    },

    image: {
        marginLeft: '3em',
        position: 'relative',
        color: 'white',
        padding: '2em',
        maxHeight: '50vh',
        maxWidth: '50vw'
    },

    buttonRow: {
        width: '40%',
        height: '4em',
        padding: 'auto'
    }
}

const FeedImage = (props) => {
    const image = props.image;
    return (
        <div style={styles.wrapper}>
            <img style={styles.image} src={`http://localhost:3000/images/${image.id}`} alt={image.path}></img>
            <div style={styles.buttonRow}>
                <Upvote upvote={props.upvote} imageId={image.id}/>
                <Downvote downvote={props.downvote} imageId={image.id} />
                <p>{image.votes}</p>
            </div>
        </div>
    )
}

export default FeedImage;