import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'
import "./Signup.css"

class Signup extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="container">
                <div className="SignupForm">
                    <SignupForm />
                </div>
            </div>
        );
    }
}

export default Signup;