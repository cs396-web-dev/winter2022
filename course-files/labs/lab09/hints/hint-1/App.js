import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';

class App extends React.Component {  

    render () {
        return (
            <div>
                <NavBar title="Photo App" username="my user" />
                <aside>
                    <Profile />
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>
            </div>
        );
    }
}

export default App;