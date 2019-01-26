import React from 'react';
import Images from './Images/Images';
import Feed from './Images/Feed/Feed';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h2>Home</h2>
                    <button onClick={this.props.logout}>Log Out</button>
                    <hr />
                    <Link to="/profile"><button>Profile</button></Link>
                    <Link to="/"><button>Feed</button></Link>
                    <Switch>
                        <Route path="/profile"><Images /></Route>
                        <Route path="/"><Feed /></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Home;