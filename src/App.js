import React from "react";
import Modal from "react-modal";
import "./App.css";
import { VictoryPie, VictoryContainer } from "victory";
import DisplayEvent from "./components/displayEvent";
import { PopulateChartData } from "./utils/utils";

class App extends React.Component {
  state = { events: [], isLoading: true, data: [], isOpen: false };

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
          isLoading: false,
          data: PopulateChartData(data._embedded.events)
        });
      });
  };

  handleClick = event => {
    this.setState({ isOpen: true });
  };

  closePopup = event => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className="mainDiv">
        <h1 className="header">Current events in Manchester</h1>
        <button className="openChart" onClick={this.handleClick}>
          Show event statistics
        </button>
        <Modal className="popup" ariaHideApp={false} isOpen={this.state.isOpen}>
          <div className="popup__text">
            <h2>Events by category:</h2>
            {this.state.data && (
              <div className="chart">
                <VictoryPie
                  startAngle={-90}
                  endAngle={90}
                  data={this.state.data}
                  height={200}
                  width={300}
                  padding={{ top: 20, bottom: 0, left: 10, right: 120 }}
                />
              </div>
            )}
          </div>
          <button className="modalButton" onClick={this.closePopup}>
            Close
          </button>
        </Modal>{" "}
        {this.state.events && <DisplayEvent events={this.state.events} />}
      </div>
    );
  }
}

{
  /* <Modal className="popup" ariaHideApp={false} isOpen={isOpen}>
  <div className="popup__text">
    <h2>{drinkName}</h2>
    <p>{outputRecipe}</p>
    {userInput.extra === extraOffered || (
      <p>
        top tip: the user choose {userInput.extra} but we want to offer{" "}
        {extraOffered}
      </p>
    )}
  </div>
  <button className="modalButton" onClick={this.closePopup}>
    Close
          </button>
</Modal> */
}

export default App;
