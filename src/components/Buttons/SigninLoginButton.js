import React from 'react';
import './SigninLoginButton.css' //Styling specific to the buttons

/**
 * Sign and login button
 * @param props properties of the component,
 *              props.formName is the form that the button toggles (either sign in or login form)
 * @returns A sign in or login Component (depending on formName property)
 */
const SigninLoginButton = (props) => {

    /**
     * Toggles visibility of the corresponding form (sign in or login form)
     */
    const toggleForm = () => {
        document.getElementById(props.formName).classList.toggle(props.formName);
    }

    return(
      //  When the button is clicked, the corresponding form appears on screen
      <button onClick={toggleForm} className={`button-style`}>
          {/*The text inside the button, will be the components children
          (the text between the components open and closing tag)*/}
          {props.children}
      </button>
    );
}

export default SigninLoginButton;