import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Testing useFetchGifs hook", () => {
  test("should return the initial state", () => {
    // const { data, loading } = useFetchGifs("Memes");
    const { result } = renderHook(() => useFetchGifs("Memes"));
    console.log(result);
    const { data, loading } = result.current;
    console.log(data, loading);
  });
});
