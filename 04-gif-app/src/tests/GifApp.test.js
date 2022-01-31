import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifApp } from "../GifApp";

describe("Testing GifApp component", () => {
  test("should to show the component correctly", () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a category list ", () => {
    const categories = ["Memes"];
    const wrapper = shallow(<GifApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
