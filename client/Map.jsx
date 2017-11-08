import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const Map = () => {
  const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    />
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
