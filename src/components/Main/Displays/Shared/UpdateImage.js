import React from 'react';

class UpdateImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            imageId: this.props.imageId
        }
    }

    handleClick = () => {
        let upload = document.getElementById('updateUpload')
        let url = `http://localhost:3000/images/${this.state.imageId}`;
        let token = localStorage.getItem('token');
        let formData = new FormData();
        formData.append('image', upload.files[0])

        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization' : token
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log("before fetch");
            this.props.fetchImages();
        })
        .catch(err => console.log(err));
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const update = !this.state.toggle? <div></div> 
        : <div>
            <input id="updateUpload" type="file" />
            <button onClick={this.handleClick}>Choose Image</button>
        </div>
        return (
            <div>
                <button onClick={this.handleToggle}>Update Image</button>
                {update}
            </div>
        )
    }
}

export default UpdateImage;