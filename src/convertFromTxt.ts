const fs = require("fs");

const swearWordsString = fs.readFileSync("src/swears.txt").toString("utf-8");
const swearWordsArray = swearWordsString
  .split("\n")
  .map((swear: string) => swear.trim());

try {
  fs.writeFileSync("src/swears.json", JSON.stringify(swearWordsArray));
  console.log("SwearsJSON written to 'src/swears.json'");
  if (!fs.existsSync("./dist")) {
    fs.mkdirSync("./dist");
  }
  fs.copyFileSync("src/swears.json", "dist/swears.json");
  console.log("Copied 'src/swears.json' to 'dist/swears.json'");
} catch (err) {
  console.error(err);
}
