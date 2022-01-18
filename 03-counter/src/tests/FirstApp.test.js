import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import FirstApp from "../FirstApp";

describe("Testing FirstApp", () => {
  // before enzyne
  //   test('should to show a message "Hello world"', () => {
  //     const hi = "Hello world";
  //     const { getByText } = render(<FirstApp hi={hi} />);
  //     expect(getByText(hi)).toBeInTheDocument();
  //   });

  test("should to show FirstApp correctly", () => {
    const hi = "Hello world";
    const wrapper = shallow(<FirstApp hi={hi} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should to show FirstApp correctly with default subtitle", () => {
    const hi = "Hello world";
    const subtitle = "Default Subtitle";
    const wrapper = shallow(<FirstApp hi={hi} subtitle={subtitle} />);
    const paragrah = wrapper.find("p").text();
    console.log(paragrah);
    expect(paragrah).toBe(subtitle);
    expect(wrapper).toMatchSnapshot();
  });
});
