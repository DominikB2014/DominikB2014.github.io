import React from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react'; //Google Maps API imports

// Style for a map, map will always take the entire container
const mapStyles = {
    width: '100%',
    height: '100%'
};

/**
 * A container that displaying a google map
 * @param props properties of the component
 *              props.center is the coordinates of the starting center of the map as a object
 * @returns A map component
 */
export const MapContainer = (props) => {
    console.log(props);

    /**
     * Highlights a list-item on the search results page when a Marker is clicked
     * @param item the id of the list-item to be highlighted
     */
    const handleClick = (item) =>{
        const listItems = document.getElementsByClassName("list-item");
        /*
        Traverses through all list item,
         the list-item with id = item is highlighted, the rest are given another colour
         */
        for(let i = 0; i < listItems.length; i++){
            if(listItems.item(i).id === item) listItems.item(i).style.backgroundColor = "white";
            else listItems.item(i).style.backgroundColor = "#547ec2";
        }
    };
        return (
            //Google Maps Component centered at the passed in property of center
            <Map google={props.google} zoom={10} style={mapStyles} initialCenter={props.center}>

                {/*Markers on the map on specific coordinates,
                onClick will highlight a specific item id in the list-view (only applicable of search results page*/}
                <Marker
                    position={{ lat: 43.256531, lng: -79.874420}}
                    onClick={() => handleClick("item2")}/>
                <Marker
                    position={{ lat: 43.0896, lng: -79.0849}}
                    onClick={() => handleClick("item1")}/>
                <Marker
                    position={{ lat: 44.3894, lng: -79.6903}}
                    onClick={() => handleClick("item3")}/>
            </Map>

        );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDZ-7P4_Z6trtzAZgL3s_Oq3SEY_Q8TKzw'
})(MapContainer);