import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import "./Login.css"

class Login extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="container">
                <div className="LoginForm">
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default Login;