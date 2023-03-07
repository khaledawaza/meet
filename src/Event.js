import React, { Component } from "react";

class Event extends Component {
  render() {
    return <div></div>;
  }
}
export default Event;


render() {
  const { events } = this.props;
  return (
    <ul className="EventList">
      {events.map(event =>
        <li>
          <Event event={event} />
        </li>
      )}
    </ul>
  );
}