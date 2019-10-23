import React from 'react';

import SigninLoginButton from "./Buttons/SigninLoginButton";

import SearchBar from "./Search/SearchBar";

/**
 * Home page containing login/signup buttons, search bar and background image.
 * @returns Home Page as a Component
 */
const Home = () => {
    return (
        /* div.container contains the buttons, search bar and
         * displays the background of the home page between the navbar and header
         */
        <div className={"container"}>
            {/*Mobile login and signup buttons*/}
            <div className={"buttons-main"}>
                {/*Login/Signup buttons are done through a component
                 as the buttons have similar style and functionality*/}
                <SigninLoginButton formName={"login"}>Login</SigninLoginButton>
                <SigninLoginButton formName={"signup"}>Sign Up</SigninLoginButton>
            </div>

            {/*Mobile Search Bar*/}
            <div className={"search-main"}>
                <SearchBar/> {/* Search Bar (aka Search Form) component*/}
            </div>
        </div>
    );
};

export default Home;