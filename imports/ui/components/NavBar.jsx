import React from 'react';
import {
  Link
} from 'react-router-dom';
export default class  NavBar  extends React.Component{

    renderUserNav(){
      return ( 
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <Link className="nav-item nav-link brand" to="/">TokenInsights</Link>
              <Link to="/upload-icos" className="nav-item nav-link">Upload ICOs</Link>
              <Link to="/get-reports" className="nav-item nav-link">Get Reports</Link>
              <Link to="/login" className="nav-item nav-link pull-right">Logout</Link>
              </div>
            </div>
          </nav>);
    }  

    renderGuestNav(){
      return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link brand" to="/">TokenInsights</Link>
                <Link to="/upload-icos" className="nav-item nav-link">Upload ICOs</Link>
                <Link to="/get-reports" className="nav-item nav-link">Get Reports</Link>
                <Link to="/login" className="nav-item nav-link pull-right">Login</Link>
                <Link to="/register" className="nav-item nav-link pull-right">Register</Link>
              </div>
            </div>
          </nav> 
      );
    }
    render(){
      return  this.props.isLoggedIn ? this.renderUserNav() : this.renderGuestNav();
    }
    
  
}


NavBar.propTypes = {
    isLoggedIn: React.PropTypes.bool,
};


