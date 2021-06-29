import { swearWords, cleanUpSwearyString } from "./index";

describe("swearWords", () => {
  it("should return a list of swears", () => {
    console.log("Swear count: ", swearWords.length);
    expect(swearWords.length).toBeGreaterThan(450);
  });
});

describe("cleanUpSwearyString", () => {
  it("should replace keep all clean words", () => {
    expect(cleanUpSwearyString("Hi my dear")).toBe("Hi my dear");
  });
  it("should replace single word with replacement", () => {
    expect(
      cleanUpSwearyString("You son of a bitch", { wordToUseInstead: "fluff" })
    ).toBe("You son of a fluff");
  });
  it("should replace all swears with asterisks", () => {
    expect(cleanUpSwearyString("Fuck you SHITBAG")).toBe("**** you ****BAG");
  });
  it("should replace different case swears with asterisks", () => {
    expect(cleanUpSwearyString("FUCKSHIT you fuckershit")).toBe(
      "******** you ****er****"
    );
  });
  it("should replace swears with custom clean word", () => {
    expect(
      cleanUpSwearyString("Billy you SHITBAG", { wordToUseInstead: "sweetie" })
    ).toBe("Billy you sweetieBAG");
  });
  it("should replace swears with custom clean word with first letter uppercase", () => {
    expect(
      cleanUpSwearyString("Billy you ShitBAG", { wordToUseInstead: "Fluff" })
    ).toBe("Billy you FluffBAG");
  });
  it("should replace swears with multiple replacement words when multiple swears added", () => {
    expect(
      cleanUpSwearyString("Go fuck yourself you fuckSHIT", {
        wordToUseInstead: "fluff",
      })
    ).toBe("Go fluff yourself you flufffluff");
  });
});
