import React from 'react';
import './App.css';
// import event from './hardcode';
import DisplayEvent from './components/displayEvent';

class App extends React.Component {
  state = { events: [], venues: [], attractions: [], isLoading: true };

  componentDidMount = () => {
    fetch(
      'https://app.ticketmaster.com/discovery/v2/suggest/?countryCode=GB&size=5&sort=date,asc&apikey=c4kXaqgAq1waXtfVKdDY873kHV6wfGEi'
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          events: data._embedded.events,
          venues: data._embedded.venues,
          attractions: data._embedded.attractions,
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
        {this.state.events && <DisplayEvent events={this.state.events} />}
      </div>
    );
  }
}

export default App;
