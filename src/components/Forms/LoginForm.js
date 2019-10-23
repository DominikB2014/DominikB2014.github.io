import React from 'react';
import useSignUpForm from './FormHook';
import './Form.css'

//TODO - Comments

const LoginForm = () => {
    const {inputs, handleInputChange, handleSubmit, validationErrors} = useSignUpForm();
    console.log({validationErrors});

    const toggleForm = () => {
        document.getElementById("login").classList.toggle("login");
    };

    return (
        <div className={"blur-background"}>
            <form onSubmit={handleSubmit} id="pop-up-form" className={"form-style"}>
                <a onClick={toggleForm} className="close"/>
                <h1>Login</h1>
                <div>
                    <label>Username</label>
                    <input type="text" name="userName" onChange={handleInputChange} value={inputs.userName} required/><br/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="userPassword" onChange={handleInputChange} value={inputs.userPassword} required/><br/>
                </div>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default LoginForm;