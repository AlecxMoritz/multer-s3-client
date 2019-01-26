import React from 'react';
import FeedImage from './FeedImage';

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
        let url = 'http://localhost:3000/images/all';

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(images => {
            this.setState({
                images: images.images
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        const images = this.state.images;
        const displayImages = images.length > 0 ? images.map(image => {
            return <FeedImage image={image} key={image.id} fetchImages={this.fetchImages} />
        })
        : <div></div>

        return (
            <div>
                {displayImages}
            </div>
        )
    }
}

export default Feed;