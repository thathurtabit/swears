const fs = require("fs");

const swearWordsString = fs.readFileSync("src/swears.txt").toString("utf-8");
const swearWordsArray = swearWordsString
  .split("\n")
  .map((swear: string) => swear.trim());

try {
  fs.writeFileSync("src/swears.json", JSON.stringify(swearWordsArray));
  console.log("Swears written to 'src/swears.json'");
} catch (err) {
  console.error(err);
}
