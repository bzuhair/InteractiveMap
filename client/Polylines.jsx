import React from 'react';
import { Polyline } from 'react-google-maps';


class Polylines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const trips = this.props.trips;
    this.setState({ trips });
    console.log(this.props)
  }
  render() {
    // console.log(this)
    // const trips = this.props.trips;
    // const key = Object.keys(trips);
    // console.log(key)
    return (
      <div>
        <Polyline
          // path={this.props.coordinates}
        />
      </div>
    );
  }
}

export default Polylines;
