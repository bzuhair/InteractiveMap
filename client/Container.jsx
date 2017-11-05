import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './Map.jsx';
import GAPI from '../GAPI.json';

export default class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    )
  }
}


GoogleApiWrapper({
  apiKey: GAPI.GoogleAPI,
})(Container);
