import React from "react";
import { shallow, mount } from "enzyme";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from "../Api";
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
//import NumberOfEvents from '../NumberOfEvents'

describe("<App/> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render NOE", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe("<App /> integration", () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state("events");
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state("locations");
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
    AppWrapper.unmount();
  });

<<<<<<< HEAD
  test("get list of events matching the city selected by the user", async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state("events")).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
    suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();
    expect(AppWrapper.state("events")).not.toHaveLength(allEvents.length);
    AppWrapper.unmount();
  });

  test('App passes "NOE" state as a prop to NumberOfEvents', () => {
    const AppWrapper = mount(<App />);
    const AppNOEState = AppWrapper.state("NOE");
    expect(AppNOEState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).state("NOE")).toBe(AppNOEState);
    AppWrapper.unmount();
  });
=======
    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });

    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
        suggestionItems.at(suggestionItems.length - 1).simulate("click");
        const allEvents = await getEvents();
        expect(AppWrapper.state("events")).not.toHaveLength(allEvents.length);
        AppWrapper.unmount();
    });

    test('App passes "NOE" state as a prop to NumberOfEvents', () => {
        const AppWrapper = mount(<App />);
        const AppNOEState = AppWrapper.state('NOE');
        expect(AppNOEState).not.toEqual(undefined);
        expect(AppWrapper.find(NumberOfEvents).state('NOE')).toBe(AppNOEState);
        AppWrapper.unmount();
    });

    test('when the user changes NOE input, app changes NOE', async () => {
        const AppWrapper = mount(<App />);
        const eventObject = { target: { value: 20 } };
        const NOEWrapper = AppWrapper.find(NumberOfEvents);
        NOEWrapper.find('input.number').simulate('change', eventObject);
        await getEvents();
        expect(AppWrapper.state('NOE')).toBe(20);
        expect(NOEWrapper.state('NOE')).toBe(20);
        AppWrapper.unmount();
    });

    test("updating city search will render a new city but preserver the selected numberOfEvents", async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const NOEWrapper = AppWrapper.find(NumberOfEvents);
        const eventObject = { target: { value: 10 } };
        await NOEWrapper.instance().onChange(eventObject);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state("suggestions");
        const selectedIndex = Math.floor(Math.random() * suggestions.length);
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        //expect that selectedCity gets stored in App state variable 'selectedLocation'
        expect(AppWrapper.state("selectedLocation")).toEqual(selectedCity);
        //expect that the selected number of events will persist for the selected city.
        expect(AppWrapper.state("events")).toHaveLength(eventObject.target.value);
        AppWrapper.unmount();
    });

>>>>>>> ac470b4f0dcdb1a8e0c03c92478516e08a7cfc93

  test("when the user changes NOE input, app changes NOE", async () => {
    const AppWrapper = mount(<App />);
    const eventObject = { target: { value: 20 } };
    const NOEWrapper = AppWrapper.find(NumberOfEvents);
    NOEWrapper.find("input.number").simulate("change", eventObject);
    await getEvents();
    expect(AppWrapper.state("NOE")).toBe(20);
    expect(NOEWrapper.state("NOE")).toBe(20);
    AppWrapper.unmount();
  });
});
