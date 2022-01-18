import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";

describe("Testing CounterApp", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });
  test("should to show CounterApp correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should to show CounterApp correctly with 100 by default", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const element = wrapper.find("h2").text().trim();
    expect(element).toStrictEqual("100");
  });

  test("should to increase the counter value +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("should to decrease the counter value -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });

  test("should to reset the counter value", () => {
    shallow(<CounterApp value={10} />);
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("10");
  });
});
