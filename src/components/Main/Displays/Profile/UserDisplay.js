import React from 'react';
import UpdateProfile from './UpdateProfile';

class UserDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }

    componentDidMount() {
        this.fetchUserInfo();
    }

    fetchUserInfo = () => {
        let url = 'http://localhost:3000/users/me';

        fetch(url, {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            }            
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
            this.setState({
                user: user
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        const user = this.state.user
        
        const userDisplay = user !== '' ? 
        <div>
            {/* <button>Update Profile</button> */}
            <h2>{user.username}</h2>
            <UpdateProfile fetchUserInfo={this.fetchUserInfo} bio={user.bio} status={user.status}/>
            <p>Status: {user.status}</p> 
            <p>Bio: {user.bio}</p> 
        </div>
        : <div></div>
        return (
            <div>
                {userDisplay}
            </div>
        )
    }
}

export default UserDisplay;