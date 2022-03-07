import React from 'react';

class NavMenu extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    // componentDidMount() {
    //     console.log('Invoked immediately after the component is mounted (added to the DOM');
    // }

    render() {
        return (
            <ul>
                <li><a href="#">Home</a></li>
                <li>{this.props.username}</li>
            </ul>
        )
    }
}
 
export default NavMenu;
