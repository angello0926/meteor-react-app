import React from 'react';
import NavBar from '../components/NavBar.jsx';
import UploadICOsForm from '../components/UploadICOsForm.jsx';
// a common layout wrapper for auth pages
const UploadICOsPage = () => (
    <div className="container">
        <NavBar isLoggedIn={false}/>
        <UploadICOsForm/>
    </div>
);

UploadICOsPage.propTypes = {
    content: React.PropTypes.element,
    link: React.PropTypes.element,
};

export default UploadICOsPage;
