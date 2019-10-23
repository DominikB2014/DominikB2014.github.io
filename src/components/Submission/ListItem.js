import React from 'react';
import Stars from "./Star"; //Star rating will be displayed on each list item
import {NavLink} from "react-router-dom";

//Prevents all text tags (h2 and p) under NavLink to be styled like link elements
const linkStyle = {
    textDecoration: 'none',
    color: 'black',
};

/**
 * List Item in the search results page
 * @param props properties of the component
 *              props.id is the id of the list-item
 *              props.title is the title of the list item
 *              props.stars is the rating of the list item
 *              props.children is the description of the list item
 * @returns A list Item component
 */
const ListItem = (props) => {
    return(
        //Entire list item is contained in a NavLink to make the entire component clickable to change pages
        <NavLink to={props.to} style={linkStyle}>

            {/*the list item is given the id property that was passed in*/}
            <li id={props.id} className="list-item">

                {/*The image is contained in this div*/}
                <div className="item-image"/>

                {/*Container for description, rating, and description*/}
                <div>
                    <h2>{props.title}
                        <Stars value={props.stars}/> {/* Star component used for readability and cleanliness*/}
                    </h2>
                    <p> {props.children} </p>
                </div>
            </li>
        </NavLink>
    );
};

export default ListItem;