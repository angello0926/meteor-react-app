import React from 'react';

export default class  UploadICOsForm  extends React.Component{

    render(){
        return  (
            <div>
                <h1>Upload ICOs</h1>
                <form action="submit">
                    <input type="text" ref="name" placeholder="Company Name:"/>
                </form>
            </div>  
        );        
    }
    

}


UploadICOsForm.propTypes = {
    isLoggedIn: React.PropTypes.bool,
};


