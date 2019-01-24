import React from 'react';

class PostImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            toggle: false

        }
    }

    handleClick = () => {
        let upload = document.getElementById('upload')
        let formData = new FormData();
        formData.append('image', upload.files[0]);

        let url = 'http://localhost:3000/images/upload'
        let token = localStorage.getItem('token');
        console.log(token)
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization' : token
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            this.props.fetchImages();
            this.setState({
                toggle: false
            })
        })
        .catch(err => console.log("Error: " + err))
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const show = !this.state.toggle ? <div></div> 
        : <div>
            <input id="upload" name="file" type="file"/>
            <button onClick={this.handleClick}>Post New Image</button>
        </div>
        return (
            <div>
                <button onClick={this.handleToggle}>Post New Image</button>
                {show}
            </div>
        )
    }
}

export default PostImage;