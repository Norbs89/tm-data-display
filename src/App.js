import React from "react";
import "./App.css";
import { VictoryPie } from "victory";
// import event from './hardcode';
import DisplayEvent from "./components/displayEvent";

const data = [
  { x: 1, y: 6, label: "one" },
  { x: 2, y: 3, label: "two" },
  { x: 3, y: 5, label: "three" }
];

class App extends React.Component {
  state = { events: [], isLoading: true };

  componentDidMount = () => {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events/?countryCode=GB&size=50&sort=date,asc&city=manchester&apikey=c4kXaqgAq1waXtfVKdDY873kHV6wfGEi"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          events: data._embedded.events,
          isLoading: false
        });
      });
  };

  render() {
    return (
      <div className="mainDiv">
        <h1 className="header">
          <u>CURRENT EVENTS</u>
        </h1>
        <VictoryPie startAngle={-90} endAngle={90} data={data} />
        {this.state.events && <DisplayEvent events={this.state.events} />}
      </div>
    );
  }
}

export default App;
