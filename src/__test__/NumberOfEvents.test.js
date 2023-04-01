import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents/> component", () => {
  let NOEWrapper;
  beforeAll(() => {
    NOEWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test("user sees 32 events by default", () => {
    expect(NOEWrapper.state("NOE")).toBe(32);
  });

  test("user can change NOE", () => {
    const input = NOEWrapper.find("input.number");
    const inputValue = { target: { value: 16 } };
    input.simulate("change", inputValue);
    expect(NOEWrapper.state("NOE")).toBe(16);
  });

  test("render text input", () => {
    expect(NOEWrapper.find("input.number")).toHaveLength(1);
  });
});
