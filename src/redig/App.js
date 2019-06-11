import React, { Component } from "react";
import Season from "./Season";
class App extends Component {
  //Good place to one-time setup
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMsg: ""
    };
  }
  //Good place to data loading!!
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMsg: err.message });
      }
    );
  }
  //Good place to do more data-loading when state/props changes
  componentDidUpdate() {}
  latitude(lat) {
    return <Season lat={lat} />;
  }
  latitudeError = errorMsg => {
    return <p>{errorMsg}</p>;
  };
  //Only return JSX
  render() {
    const { lat, errorMsg } = this.state;
    return (
      <div>
        <h1>latitude :</h1>
        {lat ? this.latitude(lat) : this.latitudeError(errorMsg)}
      </div>
    );
  }
  //Good place to cleaup (especially for non-react stuff)
  componentWillUnmount() {}
}
export default App;
