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
        let url = 'http://localhost:3000/images/all';

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(images => console.log(images))
        .catch(err => console.log(err));
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