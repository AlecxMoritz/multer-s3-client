import React from 'react';

class DeleteImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageId: ''
        }
    }

    componentDidMount() {
        this.setState({
            imageId: this.props.imageId
        })
    }

    handleClick = () => {
        let url = `http://localhost:3000/images/${this.state.imageId}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            this.props.fetchImages();
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <button onClick={this.handleClick}>Delete This Image</button>
        )
    }
}

export default DeleteImage;