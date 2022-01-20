import { getGifs } from "../../helpers/getGifs";

describe("Testing GifApp component", () => {
  test("should return 15 items", async () => {
    const gifs = await getGifs("Memes");
    expect(gifs.length).toBe(15);
  });
  test("shouldn't return items", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
