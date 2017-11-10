import React from 'react';
import Analytics from './Analytics.jsx';
import Map from './Map.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Map />
        <Analytics />
      </div>
    );
  }
}

export default App;
