import React from 'react';
import PostImage from '../Shared/PostImage';
import Image from './Image';  
import UserDisplay from './UserDisplay';
import APIURL from '../../../helpers/environment';

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userImgs: [],
        }
    }

    componentDidMount() {
        this.fetchImages();
    }

    componentWillUnmount() {
        this.setState({
            userImgs: [],
        })
    }

    fetchImages = () => {
        let url = APIURL + '/images/mine';
        let token = localStorage.getItem('token');

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : token
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                userImgs: data.userImages
            })
        })
        .catch(err => console.log(err));
    }

    upvote = (id) => {
        let url = `http://localhost:3000/images/up/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(() => this.fetchImages())
        .catch(err => console.log(err))
    }

    downvote = (id) => {
        let url = APIURL +  `/images/down/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(() => this.fetchImages())
        .catch(err => console.log(err))
    }

    render() {
        const images = this.state.userImgs;
        const displayImages = images.length > 0 ? images.map((image) => {
            return <Image username={image.posted_by} image={image} key={image.id} fetchImages={this.fetchImages} upvote={this.upvote} downvote={this.downvote}/>
        })
        : <div>
            <p>You don't have any images!</p>
        </div>
        return (
            <div>
                <UserDisplay />
                <PostImage fetchImages={this.fetchImages}/>
                <div>
                    {displayImages}
                </div>
            </div>
        )
    }
}

export default Images;