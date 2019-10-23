import React from 'react';

import useSignUpForm from './FormHook';

//TODO - Comments

const SignupForm = () => {

    const {inputs, handleInputChange, handleSubmit, displayError, validationErrors} = useSignUpForm();
    console.log({validationErrors});

    const toggleForm = () => {
        document.getElementById("signup").classList.toggle("signup");
    };

    return (
        <div className={"blur-background"}>
            <form onSubmit={handleSubmit} id="pop-up-form" className={"form-style"}>
                    <a onClick={toggleForm} className="close"/>
                    <h1>Create an Account</h1>
                    <div>
                        <label>Name</label>
                        <input onBlur={displayError} type="text" name="displayName" onChange={handleInputChange} value={inputs.displayName} required/><br/>
                        <p htmlFor="displayName" className={"error-message myclass"}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input onBlur={displayError} type="email" name="userEmail" onChange={handleInputChange} value={inputs.userEmail} required/><br/>
                        <p htmlFor="userEmail" className={"error-message"}/>
                    </div>
                    <div>
                        <label>Username</label>
                        <input onBlur={displayError} type="text" name="userName" onChange={handleInputChange} value={inputs.userName} required/><br/>
                        <p htmlFor="userName" className={"error-message"}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input onBlur={displayError} type="password" name="userPassword" onChange={handleInputChange} value={inputs.userPassword} required/><br/>
                        <p htmlFor="userPassword" className={"error-message"}/>
                    </div>
                    {/*<label>Re-enter Password</label>*/}
                    {/*<input type="password" id="passwordConfirm" name="password" onChange={handleInputChange} value={inputs.passwordConfirm}/><br/>*/}
                    <div className="terms-and-conditions">
                        <input type="checkbox" id="terms" name="terms" onChange={handleInputChange} value="true"/>I accept the Terms and Conditions
                    </div>
                    <input type="submit" value={"Sign Up"}/>
            </form>
        </div>
    );
};

export default SignupForm;