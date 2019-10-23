import React from 'react';
import './results.css'

//Components within the results page
import MapContainer from "./MapContainer";
import ListItem from "./Submission/ListItem";

/**
 * Toggles map view in mobile version of the results page
 */
const toggleMap = () => {
    document.querySelector(".toggle-switch").classList.toggle('toggle-map');
    document.querySelector(".map-view").classList.toggle('map-view-enable');
};

/**
 * Page that displays search results
 * @param props properties of the component
 *              props.location.locationProps is used by the searchBar to center the map if searched by location
 * @returns A Results Component
 */
const Results = (props) => {
    return (
        //Empty container for all elements as JSX does not allow adjacent elements
        <>
            {/*Container for the list view of the search results*/}
            <div id="list-view">

                {/* Each element in the list is a search result displayed as a ListItem Component*/}
                <ul>
                    <ListItem to="../Area" id="item1" stars={4} title={"Niagara Region"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, optio!
                    </ListItem>
                    <ListItem to="../Area" id="item2" stars={4} title={"Hamilton"}>
                        Hamilton features many types of factories.
                        Big factories, small factories, and even medium
                        factories.
                    </ListItem>
                    <ListItem to="../Area" id="item3" stars={4} title={"Barrie"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, perspiciatis!
                    </ListItem>
                    <ListItem to="../Area" id="item4" stars={4} title={"Barrie"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque esse placeat suscipit.
                    </ListItem>
                    <ListItem to="../Area" id="item5" stars={4} title={"Barrie"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, provident!
                    </ListItem>
                    <ListItem to="../Area" id="item6" stars={4} title={"Barrie"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, magnam.
                    </ListItem>
                </ul>
            </div>

            {/*Container for the map view of the search results, displayed using Google Maps API
            The map is centered at the users location if they search by location, or a default location otherwise*/}
            <div className="map-view">
                <MapContainer center={props.location.locationProp ? props.location.locationProp : { lat: 43.0896, lng: -79.0849}}/>
            </div>

            {/* Toggle switch to toggle between map and list view on mobile */}
            <div id="toggle-background">
                <p className="toggle noselect">LIST</p>
                {/*When toggle button is clicked, the map-view is toggled via toggleMap function*/}
                <div className="toggle" onClick={toggleMap}>
                    <div className="toggle-switch">
                    </div>
                </div>
                <p className="toggle noselect">MAP</p>
            </div>

        </>
    );
};

export default Results;