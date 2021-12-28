import Header from './Header';
import DoctorList from './DoctorList';
import CompanionList from './CompanionList';
import DoctorDetail from './DoctorDetail';
import React from 'react';

class App extends React.Component {  

    constructor(props) {
        super(props);
        // initialization code
    }

    componentDidMount() {
        // fires after component inserted into the DOM tree
    }

    componentWillUnmount() {
        // fires before a component is removed from the DOM tree and destroyed
    }
    
    render () {
        return (
            <div className="container">
                <Header title="Doctor Who Editor" />
                <DoctorList />

                <main className="main">
                    <DoctorDetail />
                    <CompanionList />
                </main>  

            </div>
        );
    }
}

export default App;