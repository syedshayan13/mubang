/* eslint-disable no-undef */
/* global google */
import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>{
      console.log(props.location)
      return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.location.lat, lng: props.location.lng }}
    >
      <Marker
        position={{ lat: props.location.lat, lng: props.location.lng }}
      />
    </GoogleMap>

      )
  }
      ));
  export default MapWithAMarker;
