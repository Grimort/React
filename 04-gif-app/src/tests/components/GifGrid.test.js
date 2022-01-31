import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Testing GifGrid component", () => {
  const category = "Memes";
  let wrapper;
  beforeEach(() => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    wrapper = shallow(<GifGrid category={category} />);
  });
  test("should to show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("shouldn't show items", () => {
    const gifs = [];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    wrapper = shallow(<GifGrid category="" />);
    expect(wrapper.find("p").exists()).toBeFalsy();
  });
  test("should show items when images has been loaded", () => {
    const gifs = [
      {
        id: "id-1",
        title: "title-1",
        url: "url-1",
      },
      {
        id: "id-2",
        title: "title-2",
        url: "url-2",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: true,
    });
    expect(wrapper.find("p").exists()).toBeTruthy();
  });
});
