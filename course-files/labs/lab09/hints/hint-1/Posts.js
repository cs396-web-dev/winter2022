import React from 'react';

class Posts extends React.Component {  

    constructor(props) {
        super(props);
        // constructor logic
        console.log('Posts component created');
    }

    componentDidMount() {
        // fetch posts
        console.log('Posts component mounted');
    }
    
    render () {
        return (
            <div id="posts"></div>
        );   
    }
}

export default Posts;