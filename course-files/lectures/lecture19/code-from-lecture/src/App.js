import './App.css';
import NavMenu from './NavMenu';
import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: {}
        };
        console.log('Component created');
        this.getProfile();
    }

    getProfile() {
        fetch('https://photo-app-demo.herokuapp.com/api/profile')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.setState({
                    currentUser: data
                })
            })
    }

    // componentDidMount() {
    //     console.log('Invoked immediately after the component is mounted (added to the DOM');
    // }

    render() {
        console.log('Component is redrawing. Current User:', this.state.currentUser);
        return (
            <div>
                <nav>
                    <NavMenu username={this.state.currentUser.username} />
                </nav>
                <aside>
                    <section>Profile</section>
                    <section>Suggestions</section>
                </aside>
                <main>
                    <section>Stories</section>
                    <section>Posts</section>
                </main>
            </div>
        )
    }
 }
 

// function App() {
//   return (
//     <div className="App">
//         Hello world!
//     </div>
//   );
// }

export default App;
