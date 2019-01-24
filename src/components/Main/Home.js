import React from 'react';
import Images from './Images/Images';

class Home extends React.Component {

    

    render() {
        return (
            <div>
                <h2>Home</h2>
                <button onClick={this.props.logout}>Log Out</button>
                <hr />
                <Images />
            </div>
        )
    }
}

export default Home;