import React from 'react';

class Stories extends React.Component {  

    constructor(props) {
        super(props);
        // constructor logic
        console.log('Stories component created');
    }

    componentDidMount() {
        // fetch posts
        console.log('Stories component mounted');
    }
    render () {
        return (
            <header className="stories"></header>  
        );
    }
}

export default Stories;