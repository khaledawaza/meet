import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import { getEvents, extractLocations } from './Api';
//import { mockData } from './mock-data'

class App extends Component {
  state = {
    events: [],
    locations: [],
    seletedLocation: 'all',
    NOE: 32,

  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        //events = events.slice(0, this.state.NOE); will slice to 2 locations
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, inputNumber) => {
    const { NOE, selectedLocation } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, NOE);
        this.setState({
          events: eventsToShow,
          selectedLocation: location
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = (selectedLocation === 'all') ? events :
          events.filter((event) => event.location === selectedLocation);
        const eventsToShow = locationEvents.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          NOE: inputNumber
        });
      })
    };
  }
  /*
    getData = () => {
      const { locations, events } = this.state;
      const data = locations.map((location) => {
        const inputNumber = events.filter((event) => event.location === location).length
        const city = location.split(', ').shift()
        return { city, inputNumber };
      })
      return data;
    };
  */

  render() {
    return (
      <div className="App" >
        <h1>Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents events={this.state.events} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;