import React from "react";

const DisplayEvent = props => {
  const eventDetails = props.events.map(event => (
    <div key={event.id} className="eventCard">
      <img src={event.images[0].url} alt="" />
      <div className="allText">
        <h2>{event.name}</h2>
        <div className="eventDetails">
          <p>Date: {event.dates.start.localDate}</p>
          <p>Start time: {event.dates.start.localTime}</p>
          <a href={event.url}>Full event details</a>
        </div>

        <div className="venueDetails">
          <p>Venue: {event._embedded.venues[0].name}</p>
          <p>City: {event._embedded.venues[0].city.name}</p>
          <a href={event._embedded.venues[0].url}>Venue details</a>
        </div>
      </div>
    </div>
  ));
  return <div className="cardContainer">{eventDetails}</div>;
};

export default DisplayEvent;
