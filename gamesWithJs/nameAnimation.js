function leftPadding(message, column = 127) {
  const emptyColunms = column - message.length;
  const leftPad = Math.floor(emptyColunms / 2) + message.length;

  return message.padStart(leftPad)
}

function alignCenterHorizontally(message, column = 127) {
  const leftPaddedMsg = leftPadding(message, column)
  return leftPaddedMsg.padEnd(column);
}

function delayTime(seconds) {

  for (let secCount = 0; secCount < seconds; secCount++) {
    const timeCount = [];
    for (let count = 0; count < 5e6; count++) {
      timeCount.push(count);
    }
  }

}

const letterA = [
  ["     *     "],
  ["    * *    "],
  ["   *****   "],
  ["  *     *  "],
  [" *       * "]
];
const letterB = [
  [" * * * **  "],
  [" *       * "],
  [" * * ****  "],
  [" *       * "],
  [" * * * **  "]
];
const letterC = [
  ["  ** * * * "],
  [" *         "],
  [" *         "],
  [" *         "],
  ["  ** * * * "]
];
const letterD = [
  [" * * * *   "],
  [" *       * "],
  [" *       * "],
  [" *       * "],
  [" * * * *   "]
];
const letterE = [
  [" * * * * * "],
  [" *         "],
  [" * * * * * "],
  [" *         "],
  [" * * * * * "]
];
const letterF = [
  [" * * * * * "],
  [" *         "],
  [" * * * * * "],
  [" *         "],
  [" *         "]
];
const letterG = [
  [" * * * * * "],
  [" *         "],
  [" *   * * * "],
  [" *       * "],
  [" * * * * * "]
];
const letterH = [
  [" *       * "],
  [" *       * "],
  [" * * * * * "],
  [" *       * "],
  [" *       * "]
];
const letterI = [
  [" * * * * * "],
  ["     *     "],
  ["     *     "],
  ["     *     "],
  [" * * * * * "]
];
const letterJ = [
  [" * * * * * "],
  ["     *     "],
  ["     *     "],
  [" *   *     "],
  ["  ****     "]
];
const letterK = [
  [" *       * "],
  [" *     *   "],
  [" * * *     "],
  [" *     *   "],
  [" *       * "]
];
const letterL = [
  [" *         "],
  [" *         "],
  [" *         "],
  [" *         "],
  [" * * * * * "]
];
const letterM = [
  [" *       * "],
  [" * *   * * "],
  [" *   *   * "],
  [" *       * "],
  [" *       * "]
];
const letterN = [
  [" *       * "],
  [" * *     * "],
  [" *   *   * "],
  [" *     * * "],
  [" *       * "]
];
const letterO = [
  ["   * * *   "],
  [" *       * "],
  [" *       * "],
  [" *       * "],
  ["   * * *   "]
];
const letterP = [
  [" * * * *   "],
  [" *       * "],
  [" * * * *   "],
  [" *         "],
  [" *         "]
];
const letterQ = [
  ["   * * *   "],
  [" *       * "],
  [" *   *   * "],
  [" *     * * "],
  ["   * **  * "]
];
const letterR = [
  [" * * * *   "],
  [" *       * "],
  [" * * * *   "],
  [" *     *   "],
  [" *       * "]
];
const letterS = [
  ["  * * * *  "],
  [" *         "],
  ["  * *** *  "],
  ["         * "],
  ["  * * * *  "]
];
const letterT = [
  [" * * * * * "],
  ["     *     "],
  ["     *     "],
  ["     *     "],
  ["     *     "]
];
const letterU = [
  [" *       * "],
  [" *       * "],
  [" *       * "],
  [" *       * "],
  ["   * * *   "]
];
const letterV = [
  [" *       * "],
  ["  *     *  "],
  ["   *   *   "],
  ["    * *    "],
  ["     *     "]
];
const letterW = [
  [" *       * "],
  [" *       * "],
  [" *   *   * "],
  [" * *   * * "],
  [" *       * "]
];
const letterX = [
  [" *       * "],
  ["   *   *   "],
  ["     *     "],
  ["   *   *   "],
  [" *       * "]
];
const letterY = [
  [" *       * "],
  ["   *   *   "],
  ["     *     "],
  ["     *     "],
  ["     *     "]
];
const letterZ = [
  [" * * * * * "],
  ["       *   "],
  ["     *     "],
  ["   *       "],
  [" * * * * * "]
];
const letterSpace = [
  ["           "],
  ["           "],
  ["           "],
  ["           "],
  ["           "]
];


const alphaArray = [letterA, letterB, letterC,
  letterD, letterE, letterF,
  letterG, letterH, letterI,
  letterJ, letterK, letterL,
  letterM, letterN, letterO,
  letterP, letterQ, letterR,
  letterS, letterT, letterU,
  letterV, letterW, letterX,
  letterY, letterZ, letterSpace
];


function mapIndex(letter) {
  const alphaStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  const index = alphaStr.indexOf(letter)
  return index;
}

function showWord(word) {
  console.clear();
  console.log("\n".repeat(13));
  for (let index = 0; index < 5; index++) {
    console.log(alignCenterHorizontally(("" + word[index])).replaceAll("*", "*"));
    delayTime(2);
  }
  delayTime(3);
  removeBottomLine(word);
}

function showWordFast(length, word) {
  const newWordArray = [];
  console.log("\n".repeat(13));
  for (let index = 0; index < length; index++) {
    newWordArray.push(alignCenterHorizontally("" + word[index]));
  }
  console.log(newWordArray.join("\n"));

  delayTime(5);

}


function removeBottomLine(word) {

  for (let index = word.length - 1; index >= 0; index--) {
    console.clear();

    showWordFast(index, word);

  }
  console.log("\n".repeat(19));
}

function createStarBlockName(letterIndexes) {
  let word = [];

  for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    let line = [];
    for (let index = 0; index < letterIndexes.length; index++) {
      line.push(alphaArray[letterIndexes[index]][rowIndex]);
    }
    word.push(line.join("  "))
  }
  showWord(word);
}

function findIndices(name) {
  let letterIndexes = [];
  for (let index = 0; index < name.length; index++) {
    letterIndexes.push(mapIndex(name[index]));
  }

  createStarBlockName(letterIndexes);
}

function takeUserInput() {
  console.clear();
  const givenName = prompt("Enter Name: ");
  const nameInUpperCase = givenName.toUpperCase()

  findIndices(nameInUpperCase);
}

takeUserInput();
