import React from 'react';

/**
 * Displays star rating by displaying repeated icons
 * @param props properties of the component,
 *              props.value is the number of stars to display
 * @returns A star rating component (repeated icon elements)
 */
const Star = (props) => {
    //Builds an array of icons of size props.value, each element is a star icon
    let a = [];
    for (let i = 0; i < props.value; i++) {
        a.push(<i className="fas fa-star star"/>);
    }
    return (
        <>{a}</>
    );
};

export default Star;