import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '550px'
};

const center = {
  lat: 34.007,
  lng: -118.446
};


class Map extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
    <div className="map">
      <LoadScript googleMapsApiKey="AIzaSyAftwrvS2Mphv821bXwZMOR3EmC6esH8Fk">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
        </GoogleMap>
      </LoadScript>
    </div>
  );
  }
}

export default Map;
