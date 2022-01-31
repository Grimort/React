import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Testing useFetchGifs hook", () => {
  test("should return the initial state", () => {
    // const { data, loading } = useFetchGifs("Memes");
    renderHook(useFetchGifs("Memes"));
  });
});
