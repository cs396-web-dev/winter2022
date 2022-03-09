import React from 'react';

class Suggestions extends React.Component {  
    constructor(props) {
        super(props);
        // constructor logic
        console.log('Suggestions component created');
    }

    componentDidMount() {
        // fetch posts
        console.log('Suggestions component mounted');
    }

    render () {
        return (
            <div className="suggestions">
                <p className="suggestion-text">Suggestions for you</p>
                <div>Suggestions...</div>
            </div>
        )     
    }
}

export default Suggestions;