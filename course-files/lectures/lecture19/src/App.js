import './App.css';
import Nav from './Nav';
import React from 'react';

class App extends React.Component { 

    // optional constructor method: 
    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
        console.log('Component created');
    }

    // optional componentDidMount method: 
    componentDidMount() {
        console.log('Invoked immediately after the component is mounted (added to the DOM');
        this.getProfile()
    }

    getProfile() {
        fetch('https://photo-app-demo.herokuapp.com/api/profile')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    username: data.username
                })
            })
    }

    render () {
        return (
            <div>
            <nav className="main-nav">
                <h1>Photo App</h1>
                {/* Nav Links go here */}
                <Nav username={this.state.username} />
            </nav>
            <aside>
                <header>
                    {/* User Profile goes here */}
                    Profile
                </header>
                <section>
                    <p>Suggestions for you</p>
                    <div>
                        {/* Suggestions go here */}
                        Suggestions
                    </div>
                </section>
            </aside>

            <main>
                
                <header className="stories">
                    {/* Stories go here */}
                    Stories
                </header>

                <div>
                    {/* Posts go here */}
                    Posts
                </div>

            </main>
            
            </div>
        );
    }
}

export default App;
