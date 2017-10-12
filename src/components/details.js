import React, { Component } from 'react';
import MapWithAMarker from './MarkerMap'

class componentName extends Component {
    render() {
        console.log(this.props.location.state.data)
        const {location} = this.props.location.state.data
        
        return (

            <div style={{width:'40%',float:'right'}}>
            <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKzMcevaggXN9EXibCdfRiP2yaNwOCzw4&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            location={location}
            />    
            </div>
        );
    }
}

export default componentName;