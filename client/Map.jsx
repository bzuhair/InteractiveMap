import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Polylines from './Polylines.jsx';

const Map = (props) => {
  let polylines = null;
  if (props.trips) {
    polylines = <Polylines trips={props.trips} />;
  }

  const GettingStartedGoogleMap = withGoogleMap(() => (
    <div>
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
      />
      {polylines}
    </div>
  ));

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
