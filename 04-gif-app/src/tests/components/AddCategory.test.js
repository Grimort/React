import React from "react";
import "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Testing AddCategory component", () => {
  const setCategories = jest.fn();
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("should to show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should change the input value", () => {
    const input = wrapper.find("input");
    const value = "Memes";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });
  test("shouldn't call the function setCategories", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories and input field empty", () => {
    const input = wrapper.find("input");
    const value = "Simpsons";
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(input.prop("value")).toBe("");
  });
});
