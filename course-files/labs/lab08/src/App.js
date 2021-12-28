import React from 'react';

class App extends React.Component {  

    render () {
        return (
            <div className="container">
                <header className="header">
                    <h1>Doctor Who Editor</h1>
                </header>
                <aside className="aside">
                    List of doctors goes here.
                </aside>
                <main className="main">
                    <div className="doctor">
                        <h2>Current Doctor</h2>
                        <p>Current doctor goes here</p>
                    </div>
                    <section className="companions">
                        <h2>Companions</h2>
                        <p>Companions go here</p>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;