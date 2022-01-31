import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Testing GifGridItem component", () => {
  const title = "Title";
  const url = "https://localhost.img.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("should to show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should have a <p></p> with the title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  test("The img should have the url and alt like the props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should have the animation class", () => {
    const div = wrapper.find("div");
    expect(div.prop("className")).toContain("animate__fadeInDown");
  });
});
