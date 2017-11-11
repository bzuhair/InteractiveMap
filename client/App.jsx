import React from 'react';
import axios from 'axios';
import Analytics from './Analytics.jsx';
import Map from './Map.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = { location: [] };
  }

  componentDidMount() {
    axios.get('/trips')
      .then((response) => {
        const trips = response.data;
        console.log(response)
        this.setState({ trips });
      })
      .catch(error => console.log('Your a failure', error));
  }

  render() {
    return (
      <div>
        <Map trips={this.state.trips} />
        <Analytics />
      </div>
    );
  }
}

export default App;
