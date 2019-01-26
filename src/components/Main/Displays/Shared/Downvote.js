import React from 'react';

const Downvote = (props) => {
    return (
        <button onClick={() => props.downvote(props.imageId)}>Downvote</button>
    )
}

export default Downvote;