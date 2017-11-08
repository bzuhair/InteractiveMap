import React from 'react';
import { withGoogleMap, GoogleMap, Polyline } from 'react-google-maps';
import data from '../trips/2016-07-02--11-56-24.json';


const Map = () => {
  const coordinates = data.coords.map(position => (
    { lat: position.lat, lng: position.lng }
  ),
  );

  const GettingStartedGoogleMap = withGoogleMap(() => (
    <div>
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
      />
      <Polyline
        path={coordinates}
      />
    </div>
  ),
  );
  return (
    <GettingStartedGoogleMap
      containerElement={
        <div style={{ height: '1000px', width: '1000px' }} />
      }

      mapElement={
        <div style={{ height: '100%', width: '100%' }} />
      }

    />
  );
};

export default Map;
