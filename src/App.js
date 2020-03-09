import React from "react";
import "./App.css";
import event from "./hardcode";
import DisplayEvent from "./components/displayEvent";

class App extends React.Component {
  state = { event };

  componentDidMount = () => {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events/?apikey=c4kXaqgAq1waXtfVKdDY873kHV6wfGEi"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ event: data._embedded });
      });
  };

  render() {
    return (
      <div className="mainDiv">
        <h1 className="header">CURRENT EVENTS</h1>
        <DisplayEvent event={this.state.event.events} />
      </div>
    );
  }
}

export default App;
