import React from 'react';
import { Polyline } from 'react-google-maps';


const Polylines = (props) => {
  const polylines = Object.values(props.trips).map((trip) => {
    const coordinates = trip.coords.map(coords => (
      { lat: coords.lat, lng: coords.lng }
    ));
    return <Polyline key={trip.start_time} path={coordinates} />;
  });

  return (
    <div>
      {polylines}
    </div>
  );
};

export default Polylines;
