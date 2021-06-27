const swearsJson = require("./swears.json");

/** Array: get list of swear words. **/
export const swearWords: string[] = swearsJson;

/** Function: replace swear words with a clean word instead.

Warning: probably not the most performant function.

@param stringToClean The string you want to be cleaned
@param wordToUseInstead _Optional_: The word to be used instead of the swear word. Defaults to 'fluff'.
**/
export const cleanUpSwearyString = (
  stringToClean: string,
  wordToUseInstead = "fluff"
): string => {
  const arrayToClean = stringToClean.split(" ");

  const cleanedArray = arrayToClean.map((word: string) =>
    swearWords.some((swear: string) =>
      word.toUpperCase().includes(swear.toUpperCase())
    )
      ? wordToUseInstead
      : word
  );

  return cleanedArray.join(" ");
};
