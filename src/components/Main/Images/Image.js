import React from 'react';
import DeleteImage from './DeleteImage';
import UpdateImage from './UpdateImage';
import Radium from 'radium';

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

const Image = (props) => {
    const image = props.image;
    return (
        <div style={styles.wrapper}>
            <img style={styles.image} src={`http://localhost:3000/images/${image.id}`} alt={image.path}></img>
            <div style={styles.buttonRow}>
                <DeleteImage imageId={image.id} fetchImages={props.fetchImages}/>
                <UpdateImage imageId={image.id} fetchImages={props.fetchImages}/>
                <p>{image.votes}</p>
            </div>
        </div>
    )
}

export default Radium(Image);