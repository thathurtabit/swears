const swearsJson = require("./swears.json");

interface ICleanUpSwearyStringOptions {
  wordToUseInstead?: string;
}

/** Array: get list of swear words. **/
export const swearWords: string[] = swearsJson;

/** Function: replace swear words with a clean word instead.

Warning: probably not the most performant function.

@param stringToClean The string you want to be cleaned
@param options _Optional options object_ - `{ wordToUseInstead: "fluff" }` will result in the word "fluff" being used instead of the default asterisks (****).
**/
export const cleanUpSwearyString = (
  stringToClean: string,
  { wordToUseInstead }: ICleanUpSwearyStringOptions = {}
): string => {
  const arrayToClean = stringToClean.split(" ");
  const cleanedArray = arrayToClean.map((word: string) => {
    const useWordInstead = !!wordToUseInstead?.length;
    const swearsInWord = swearWords.filter((swear: string) => {
      return word.toUpperCase().includes(swear.toUpperCase());
    }); //?
    const escapeRegExp = (text: string) =>
      text.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    const replaceAll = (text: string, find: string, replace: string) =>
      text.replace(new RegExp(escapeRegExp(find), "gi"), replace);
    const startsWithCapital = (word: string) =>
      word.charAt(0) === word.charAt(0).toUpperCase();
    const capitalizeFirstLetter = (word: string) =>
      `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    const getReplacement = (swear: string): string => {
      if (useWordInstead) {
        return startsWithCapital(swear)
          ? capitalizeFirstLetter(wordToUseInstead!)
          : wordToUseInstead!;
      } else {
        return "*".repeat(swear.length);
      }
    };

    if (swearsInWord.length > 0) {
      let cleanedWord = word;
      const splitSwearsInSwearWord = swearWords.filter(
        (swearWordFromMainList: string) =>
          word.toUpperCase().includes(swearWordFromMainList.toUpperCase())
      );

      splitSwearsInSwearWord.forEach((swear: string) => {
        cleanedWord = replaceAll(cleanedWord, swear, getReplacement(swear));
      });

      return cleanedWord;
    }

    return word;
  });

  return cleanedArray.join(" ");
};
