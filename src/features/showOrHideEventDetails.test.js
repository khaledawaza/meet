import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/showOrHideEventDetails.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('An event element is collapsed by default', ({ given, when, then }) => {

        given('the page with the upcoming events was loaded', () => {
        });

        when('user receives a list of upcoming events', () => {
            AppWrapper = mount(<App />);
        });

        then('the event details are not visible.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user received a list of upcoming events', () => {
            AppWrapper = mount(<App />);
        });

        when('user pushes the button Show Details', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-btn').at(0).simulate("click");
        });

        then('user will see the details of the upcoming event.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .event-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user is finished reading the details of the event', async () => {
            AppWrapper = await mount(<App />);

        });

        when('user pushes the button hide events', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
        });

        then('the details of the event will collapse.', () => {
            expect(AppWrapper.find('.event.event-details')).toHaveLength(0);
        });
    });
});