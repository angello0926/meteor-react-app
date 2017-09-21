import React from 'react';

export default class  NavBar  extends React.Component{

    renderUserNav(){
      return ( 
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Features</a>
                <a className="nav-item nav-link" href="#">Pricing</a>
                
              </div>
            </div>
          </nav>);
    }  

    renderGuestNav(){
      return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link brand" href="#">TokenInsights</a>
                <a className="nav-item nav-link" href="#">Features</a>
                <a className="nav-item nav-link" href="#">Pricing</a>
                <a className="nav-item nav-link pull-right" href="#">Login</a>
                <a className="nav-item nav-link pull-right" href="#">Register</a>
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


