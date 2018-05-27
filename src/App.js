import React, { Component } from 'react';
import ListContacts from './ListContacts';



class App extends Component {
    state = {
        contacts : [
            {
                'id': 'ryan',
                'name': 'Ryan Florence',
                'email': 'ryan@yahoo.com',
                'avatarURL': 'http://localhost:5001/ryan.jpg'
            },
            {
                'id': 'michael',
                'name': 'Michael Foster',
                'email': 'michael@yahoo.com',
                'avatarURL': 'http://localhost:5001/michael.jpg'
            },
            {
                'id': 'tyler',
                'name': 'Tyler MacDonals',
                'email': 'tyler@yahoo.com',
                'avatarURL': 'http://localhost:5001/tyler.jpg'
            },
        ] 
    }
    render() {
        return (
            <div>
                <ListContacts contacts={this.state.contacts} />
            </div>
        )
    }
}

export default App;