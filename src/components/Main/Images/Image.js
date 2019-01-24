import React from 'react';
import DeleteImage from './DeleteImage';
import UpdateImage from './UpdateImage';
import Radium from 'radium';

const styles = {
    image: {
        backgroundColor: 'black',
        color: 'white',
        minWidth: '40vw',
        minHeight: '10vh',
        padding: '2em'
    },

    buttonRow: {
        width: '100%',
        height: '4em',
        padding: 'auto'
    }
}

const Image = (props) => {
    const image = props.image;
    return (
        <div style={styles.image}>
            <img src={`http://localhost:3000/images/${image.id}`} alt={image.path}></img>
            <div style={styles.buttonRow}>
                <DeleteImage imageId={image.id} fetchImages={props.fetchImages}/>
                <UpdateImage imageId={image.id} fetchImages={props.fetchImages}/>
            </div>
        </div>
    )
}

export default Radium(Image);