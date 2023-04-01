import React, { Component } from 'react';

class Event extends Component {
    state = {
        isCollapsed: true
    };

    toggleDetails = () => {
        this.setState((prevState) => ({
            isCollapsed: !prevState.isCollapsed,
        }));
    };


    render() {
        const { event } = this.props;
        const { isCollapsed } = this.state;
        const dateStart = new Date(event.start.dateTime).toGMTString();
        const dateEnd = new Date(event.end.dateTime).toGMTString();

        return (
            <div className='event'>
                <h4 className='name' style={{ fontWeight: "bold" }}>{event.summary}</h4>
                <p className='start'>{dateStart}</p>
                <p className='end'>{dateEnd}</p>
                <p className='location'>{event.location}</p>
                {!isCollapsed && (
                    <div className='event-details'>
                        <a className='link' href={event.htmlLink}>See details on Google Calendar</a>
                        <p className='description'>{event.description}</p>
                    </div>
                )}
                <button
                    className="details-btn"
                    onClick={() => this.toggleDetails()}
                >{isCollapsed ? "Show" : "Hide"} Details
                </button>

            </div>
        );
    }
}

export default Event