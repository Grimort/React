import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifApp } from "../GifApp";

describe("Testing GifApp component", () => {
  test("should to show the component correctly", () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
