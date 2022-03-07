import './App.css';
import React from 'react';

class App extends React.Component { 
    render () {
        return (
            <ul>
                <li>Menu item 1</li>
                <li>{this.props.username}</li>
            </ul>
        );
    }
}

export default App;
