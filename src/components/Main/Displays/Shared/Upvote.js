import React from 'react';

const Upvote = (props) => {
    return (
        <button onClick={() => props.upvote(props.imageId)}>Upvote</button>
    )
}

export default Upvote;