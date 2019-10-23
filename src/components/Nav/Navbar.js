import React, {useState} from 'react'; //React hooks, allows state to be used in functional components

import SearchBar from '../Search/SearchBar'; //Component for the nav searchbar
import SigninLoginButton from '../Buttons/SigninLoginButton'; //Component for the nav sign in and login buttons

import { NavLink } from 'react-router-dom'; //Component to switch between pages via ReactRouter

import "./Navbar.css"; //Styling specific to the NavBar

/**
 * The NavBar of a page
 * @returns A NavBar Component
 */
const Navbar = () => {
    //isOpen is a state variable, when true the mobile version of the NavBar is open, toggleLinks controls isOpen
    const [isOpen, toggleLinks] = useState(false);

    return(
        //Container with NavBar contents
        <nav id="navbar">
            {/*Routes to the home page when the logo is pressed */}
            <NavLink to="/" id="nav-brand"/>

            {/*Container with the nav search bar*/}
            <div className="search-nav">
                <SearchBar/>
            </div>

            {/*Container with the sign in and login buttons*/}
            <div className="buttons-nav">
                <SigninLoginButton formName={"login"}> Login </SigninLoginButton>
                <SigninLoginButton formName={"signup"}> Sign Up </SigninLoginButton>
            </div>

            {/* Hamburger button in the mobile version of the NavBar,
             when clicked isOpen = !isOpen*/}
            <div className="hamburger" onClick={() => toggleLinks(!isOpen)}>
                <div className="line"/>
                <div className="line"/>
                <div className="line"/>
            </div>

            {/*List of links to other areas of the site.
            isOpen controls a conditional render for the mobile version of the navbar,
            if true the open class is enabled therfore the links are visible*/}
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <NavLink to={"/Submission"}>Add an Area</NavLink>
                <NavLink to={"/Submission"}>About</NavLink>
                <NavLink to={"/Submission"}>Contact</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;