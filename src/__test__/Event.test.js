import React from "react";
import { shallow } from "enzyme";
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event/>component', () => {
    let EventWrapper;
    const event = mockData[0];
    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    })

    test('user sees the name, location of an event and button by default', () => {
        expect(EventWrapper.find('button.details-btn')).toHaveLength(1);
        expect(EventWrapper.find('button.details-btn').text()).toBe('Show Details');
        expect(EventWrapper.find('h4.name')).toHaveLength(1);
        expect(EventWrapper.find('p.location')).toHaveLength(1);
    })

    test('user sees the event element collapsed by default', () => {
        expect(EventWrapper.state('isCollapsed')).toBe(true);
    })

    test('user can expand and show event details when he pushes the button (Show Details)', () => {
        const detailsButton = EventWrapper.find("button.details-btn");
        expect(EventWrapper.find('button.details-btn')).toHaveLength(1);
        expect(EventWrapper.find('p.description')).toHaveLength(0);
        expect(EventWrapper.find('a.link')).toHaveLength(0);
        detailsButton.simulate('click');
        EventWrapper.setState({ isCollpsed: false });
    })

    test('user can collapse and hide event details when he pushes the button (Hide Details)', () => {
        EventWrapper.setState({ isCollpsed: false });
        expect(EventWrapper.find('p.description')).toHaveLength(1);
        expect(EventWrapper.find('a.link')).toHaveLength(1);
        EventWrapper.find('button.details-btn').simulate('click');
        expect(EventWrapper.state('isCollapsed')).toBe(true);
        expect(EventWrapper.find('button.details-btn')).toHaveLength(1);
        expect(EventWrapper.find('a.link')).toHaveLength(0);
        expect(EventWrapper.find('p.description')).toHaveLength(0);
    })


})