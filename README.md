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
```javascript
swearWords
// Gives you: ["list", "of", "rude", "words"]
```

```javascript
cleanUpSwearyString("What a lovely ****")
// Gives you: "What a lovely fluff"
```
