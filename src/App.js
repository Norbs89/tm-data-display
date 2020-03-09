import React from "react";
import "./App.css";
import event from "./hardcode";
import DisplayEvent from "./components/displayEvent";

class App extends React.Component {
  state = { event };

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
