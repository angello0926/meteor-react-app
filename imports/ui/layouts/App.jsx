import React from 'react';
import NavBar from '../components/NavBar.jsx';

export default class App extends React.Component {

        render() {
            return (
                <div className="container">
                <NavBar isLoggedIn={false}/>
                </div>
            );
        }
}
    
App.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    loading: React.PropTypes.bool
};

App.contextTypes = {
    router: React.PropTypes.object
};