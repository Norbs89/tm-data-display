import React from "react";

const DisplayEvent = props => {
  const eventDetails = props.event.map(event => (
    <div key={event.id} className="eventCard">
      <img src={event.images[2].url} alt="" />
      <h2>{event.name}</h2>
      <div>
        <p>Date: {event.dates.start.localDate}</p>
        <p>Start time: {event.dates.start.localTime}</p>
        <a href={event.url}>Full event details</a>
      </div>
      <div>
        <p>Venue: {event._embedded.venues[0].name}</p>
        <p>City: {event._embedded.venues[0].city.name}</p>
        <p>
          <a href={event._embedded.venues[0].url}>Venue details</a>
        </p>
      </div>
    </div>
  ));
  return <div>{eventDetails}</div>;
};

export default DisplayEvent;
