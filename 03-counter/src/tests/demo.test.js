describe("Demo test file", () => {
  test("the string should be equals", () => {
    const msg = "Hello world!";
    const msg2 = `Hello world!`;
    expect(msg).toBe(msg2);
  });
});
