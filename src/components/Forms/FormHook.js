import {useState} from 'react';


/**
 * creates a generic hook for sign up forms (identifies behaviors for submit and inputchange)
 * @returns {{displayError: displayError, handleSubmit: handleSubmit, inputs: {}, validationErrors: {}, handleInputChange: handleInputChange}}
 */
const useSignUpForm = () => {
    const [inputs, setInputs] = useState({}); //state variable to keep track of the field inputs
    const [validationErrors] = useState({}); //variable to contain all the input field errors. We use a state variable to update the page when rerendered

    /**
     * checks everything is in order after submitting
     * @param event submit
     */
    const handleSubmit = (event) => {
        let errorExists = false; //initializes a variable to check if any errors exist
        if (event) {
            event.preventDefault();
        }

        for (const field of Object.values(validationErrors)){ //for every elements in validationErrors (every form error)
            for (const error of Object.values(field)){ //for every error within those form errors
                if (error != null) { //if the error is not null (an error exists)
                    errorExists = true; //there exists an error
                    break;
                }
            }
        }

        if(errorExists){ //if an error was found
            alert("errors");
            return; //doesn't submit
        }
        alert("No Errors");
    };

    /**
     * updates state when input changes
     * @param event field being changed
     */
    const handleInputChange = (event) => {
        event.persist();
        validateField(event.target);//checks for errors within the current form being changed

        //The setInputs will rerender the page, also causing errors to rerender
        setInputs(
            inputs => ({...inputs, [event.target.name]: event.target.value})
            );
    };

    /**
     * function to display a form's error if an error exists
     * @param event the current form
     */
    const displayError = (event) => {
        if (validationErrors[event.target.name]){ //if the form has its error attribute added already
            for(const error of Object.values(validationErrors[event.target.name])){ //for every error in this form's error object
                if (error != null){ //if the error is not null (an error exists)
                    document.querySelector(`p[for=${event.target.name}]`).innerHTML=error; //sets the innerHTML for that specific form's paragraph element to be the error
                    break;//here we break rather than concatenating errors because we'd only like to display one error at a time
                }
                document.querySelector(`p[for=${event.target.name}]`).innerHTML=null; //if no errors were found, the paragraph doesn't display anything.
            }
            // document.querySelector(`p[for=${event.target.name}]`).innerHTML=validationErrors[event.target.name[0]]
        }
    };

    /**
     * Function that updates field errors
     * @param fieldname the field being updated
     */
    const validateField = (fieldname) => {
        let fieldLength = fieldname.value.length;//gets the # of characters in the field

        //switch statement to update errors for fields accordingly
        switch(fieldname.name) {
            case 'displayName':
                validationErrors[fieldname.name] = {
                    ['inputError']: fieldname.value.match(/^([a-zA-Z]+\s)*[a-zA-Z]+$/) ? null : 'invalid name, your name can only contain letters', //regex that matches for names. Names cannot begin or end with whitespace. Only one whitespace is allowed between strings
                    ['lengthError']: (fieldLength > 2 && fieldLength < 20) ? null : 'invalid name length' //name length must be greater than 2 and less than 20
                };
                break;
            case 'userEmail':
                validationErrors[fieldname.name] = {
                    ['inputError'] : fieldname.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? null : 'invalid email' //regex that matches for emails. Allows special characters and ensures an @ is followed by a string which is followed by .
                };
                break;
            case 'userName':
                validationErrors[fieldname.name] = {
                    ['inputError'] : fieldname.value.match(/^[a-zA-Z0-9]+$/) ? null : 'invalid username, your name can only contain letters and numbers', //regex that matches for names with letters and numbers only
                    ['lengthError']: (fieldLength > 4 && fieldLength < 20) ? null : 'invalid user name length' //ensures username is greater than 4 and less than 20 characters
                };
                break;
            case 'userPassword':
                validationErrors[fieldname.name] = {
                    // should password have regex? Revisit later
                    // ['inputError'] : fieldname.value.match(//) ? null : 'invalid password',
                    ['lengthError'] : (fieldLength > 6 && fieldLength < 30) ? null : 'invalid password length' //ensures password is greater than 6 and less than 30 characters
                };
                break;
            case 'terms':
                validationErrors[fieldname.name] = {
                    ['inputError'] : fieldname.checked ? null : 'You must accept the terms', //ensures user has checked the agree to terms checkbox
                };
                break;
            default: break;

        }
    };

    return { //returns the following functions and state variables
        handleSubmit,
        handleInputChange,
        displayError,
        inputs,
        validationErrors
    };


};

export default useSignUpForm;