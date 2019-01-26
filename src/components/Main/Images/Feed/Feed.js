import React from 'react';

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages = () => {

    }

    render() {
        return (
            <div>
                <h2>Hello Feed</h2>
            </div>
        )
    }
}

export default Feed;