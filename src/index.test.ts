import { cleanUpSwearyString } from "./index";

describe("cleanUpSwearyString", () => {
  it("should replace keep all clean words", () => {
    expect(cleanUpSwearyString("Hi my dear")).toBe("Hi my dear");
  });
  it("should replace all swears with default clean word", () => {
    expect(cleanUpSwearyString("Fuck you SHITBAG")).toBe("fluff you fluff");
  });
  it("should replace different case swears with default clean word", () => {
    expect(cleanUpSwearyString("FUCK you SHITBAG")).toBe("fluff you fluff");
  });
  it("should replace swears with custom clean word", () => {
    expect(cleanUpSwearyString("Billy you SHITBAG", "sweetie")).toBe(
      "Billy you sweetie"
    );
  });
});
