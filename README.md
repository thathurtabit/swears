# Swears
_Note: This package already includes TypeScript types - no need to go find them._

## What is this?

A basic package that includes:

* `swearWords`: string[] - An array of swear words taken from Google's big ol' list.
* `cleanUpSwearyString`: Function - basic helper function (defintely not very performant) that takes in a string and replaces any rude words with something clean.

## Install

With npm:
```console
npm i swears
```

With yarn:
```console
yarn add swears
```

## Import

```javascript
import { swearWords, cleanUpSwearyString } from "swears"
```
## Usage

### `swearWords` - array of swears

```javascript
import { swearWords } from "swears"

swearWords // ["list", "of", "rude", "words"]
```

### `cleanUpSwearyString` - replace swear words from a string
__Note:__ this helper function uses loops and RegEx which comes at a performance cost, so use sparingly.


```javascript
import { cleanUpSwearyString } from "swears"

// Default usage
cleanUpSwearyString("You son of a bitch")
//  Result: "You son of a *****"

// Pass optional `wordToUseInstead`
cleanUpSwearyString("You son of a bitch", { wordToUseInstead: "fluff" })
// Result: "You son of a fluff"
```

## Notes

Beware the [Sunthorpe Problem](https://en.wikipedia.org/wiki/Scunthorpe_problem).
