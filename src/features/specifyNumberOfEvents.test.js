import React from "react";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the page with the upcoming events was loaded', () => {

        });
        let AppWrapper
        when('user does not specify otherwise', () => {
            AppWrapper = mount(<App />);
        });

        then('32 events per page will be showed by default.', () => {
            expect(AppWrapper.state('NOE')).toBe(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper
        given('the page with the upcoming events was loaded', async () => {
            AppWrapper = await mount(<App />);
        });

        when('user changes the number of events he wants to see', async () => {
            AppWrapper.update();
            const NOEWrapper = AppWrapper.find(NumberOfEvents);
            const eventObject = { target: { value: 20 } };
            NOEWrapper.find('input.number').simulate('change', eventObject);
        });

        then('selected number of events per page will appear.', () => {
            AppWrapper.update();
            expect(AppWrapper.state('NOE')).toBe(20);
        });
    });
});