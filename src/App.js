import React, { Component } from 'react';
import ListContacts from './ListContacts';

const contacts = [
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

class App extends Component {
    render() {
        return (
            <div>
                <ListContacts contacts={contacts} />
            </div>
        )
    }
}

export default App;