function number1Block() {
  let number1 = `\n${styles("space", 58)}   ■■   `;
  number1 = number1 + `\n${styles("space", 58)} ■  ■   `;
  number1 = number1 + `\n${styles("space", 58)}    ■   `;
  number1 = number1 + `\n${styles("space", 58)}    ■   `;
  number1 = number1 + `\n${styles("space", 58)} ■ ■ ■ ■`;
  return number1;
}

function number3Block() {
  let number3 = `\n${styles("space", 58)} ■ ■ ■`;
  number3 = number3 + `\n${styles("space", 58)}     ■`;
  number3 = number3 + `\n${styles("space", 58)} ■ ■ ■`;
  number3 = number3 + `\n${styles("space", 58)}     ■`;
  number3 = number3 + `\n${styles("space", 58)} ■ ■ ■`;
  return number3;
}

function number2Block() {
  let number2 = `\n${styles("space", 58)} ■ ■ ■ `;
  number2 = number2 + `\n${styles("space", 58)}     ■ `;
  number2 = number2 + `\n${styles("space", 58)} ■ ■ ■ `;
  number2 = number2 + `\n${styles("space", 58)} ■     `;
  number2 = number2 + `\n${styles("space", 58)} ■ ■ ■ `;
  return number2;
}

function delayTime(seconds) {

  for (let secCount = 0; secCount < seconds; secCount++) {
    let timeCount = [];
    for (let count = 0; count < 5000000; count++) {
      timeCount.push(count);
    }
  }

}

function leftPadding(message, column = 127) {
  const emptyColunms = column - message.length;
  const leftPad = Math.floor(emptyColunms / 2) + message.length;

  return message.padStart(leftPad)
}

function alignCenterHorizontally(message, column = 127) {
  const leftPaddedMsg = leftPadding(message, column)
  return leftPaddedMsg.padEnd(column);
}

function spaceBetween(object1, object2, totalSpace) {
  let remainingSpace = totalSpace - (object1.length + object2.length);
  return object1.padEnd(object1.length + remainingSpace) + object2;
}

function styles(style, count) {
  switch (style) {
    case "emptyLine":
      return "\n".repeat(count);
    case "space":
      return " ".repeat(count);
    case "dashLine":
      return "▫️".repeat(count);
    case "straightLine":
      return "|".repeat(count);
  }
}

function showInstruction() {
  console.clear();
  gameTitleAnimation("MEMORY GAME");
}

function gameTitleAnimation(text) {

  for (let index = 1; index <= text.length; index++) {
    const array = [];
    const titleWithPadding = (text.slice(0, index).padEnd(32)).padStart(51);
    array.push(alignCenterHorizontally(styles("emptyLine", 13)));
    array.push(alignCenterHorizontally(styles("dashLine", 50), 127 + 50));
    array.push(alignCenterHorizontally(spaceBetween(styles("straightLine", 1), styles("straightLine", 1), 53)));
    array.push(alignCenterHorizontally(spaceBetween(styles("straightLine", 1), styles("straightLine", 1), 53)));
    array.push(alignCenterHorizontally(styles("straightLine", 1) + titleWithPadding + styles("straightLine", 1)));
    array.push(alignCenterHorizontally(spaceBetween(styles("straightLine", 1), styles("straightLine", 1), 53)));
    array.push(alignCenterHorizontally(spaceBetween(styles("straightLine", 1), styles("straightLine", 1), 53)));
    array.push(alignCenterHorizontally(styles("dashLine", 50), 127 + 50));
    console.log(array.join("\n"));
    delayTime(1);
    console.clear();
  }

}

function gameStartAnimation() {

  console.clear();
  const start = "let's start the game...";

  for (let index = 1; index <= start.length; index++) {
    console.log(styles("emptyLine", 18));
    console.log(styles("space", 30) + (start.slice(0, index).padEnd(28)).padStart(50));
    console.log(styles("emptyLine", 20));
    delayTime(1);
    console.clear();
  }

}

function countDown(numbers) {

  for (let number = 0; number < 3; number++) {
    const start = "let's start the game..."
    console.log(styles("emptyLine", 17) + alignCenterHorizontally(start));
    console.log(numbers[number]);
    console.log(styles("emptyLine", 13));
    delayTime(10);
    console.clear();
  }

}

function getRandomCardNo() {
  return Math.floor(Math.random() * 10);
}

function getCard() {
  const cards = ["*", "A", "a", "@", "4", "0", "s", "7", "9", "Z"];
  //const cards = ["☺️", "🤪", "😭", "😂", "🥹", "😇", "😍", "😡", "😩", "🤢"];
  return cards[getRandomCardNo()];
}

function generateCards(numberOfCards) {
  const cards = [];

  for (let cardsCount = 0; cardsCount < numberOfCards; cardsCount++) {
    cards.push(getCard());
  }

  return cards;
}

function displayCards(generatedCards) {
  console.clear();
  console.log("sirisha");
  console.log(styles("emptyLine", 18) + alignCenterHorizontally(generatedCards.join("   ")));
  console.log(styles("emptyLine", 20));
  delayTime(40);
  return stopDisplay();
}

function stopDisplay() {
  console.clear();
}

function takeUserInput(inputLength = 8) {
  console.clear();
  let userInput = [];
  for (let count = 0; count < inputLength; count++) {
    console.log(styles("emptyLine", 14))
    console.log(alignCenterHorizontally("Enter in Order") + styles("emptyLine", 2));
    userInput.push((prompt(leftPadding(userInput.join("  ")))));
    console.clear();
  }

  return userInput;
}

function resultBoard(emoji, text) {
  const resultMsg = [];
  const textWithPadding = alignCenterHorizontally(text, 51);

  resultMsg.push(alignCenterHorizontally(styles("emptyLine", 13)));
  resultMsg.push(alignCenterHorizontally(emoji.repeat(26), 127));
  resultMsg.push(alignCenterHorizontally(spaceBetween(styles("straightLine", 1), styles("straightLine", 1), 53)));
  resultMsg.push(alignCenterHorizontally(spaceBetween(styles("straightLine", 1), styles("straightLine", 1), 53)));
  resultMsg.push(alignCenterHorizontally(styles("straightLine", 1) + textWithPadding + styles("straightLine", 1)));
  resultMsg.push(alignCenterHorizontally(spaceBetween(styles("straightLine", 1), styles("straightLine", 1), 53)));
  resultMsg.push(alignCenterHorizontally(spaceBetween(styles("straightLine", 1), styles("straightLine", 1), 53)));
  resultMsg.push(alignCenterHorizontally(emoji.repeat(26), 127));

  console.log(resultMsg.join("\n"));
}

function displayResult(generatedCards, userEnteredCards) {

  const stringCards = generatedCards.join();
  const stringUserGuess = userEnteredCards.join();
  const hasGuessed = stringCards === stringUserGuess;
  const message = hasGuessed ? "HURRAY! YOU WON" : "YOU LOST! Better Luck Next Time";
  const symbol = hasGuessed ? "👏" : "👎";
  const lines = hasGuessed ? 16 : 14;

  resultBoard(symbol, message);

  if (!hasGuessed) {
    console.log(alignCenterHorizontally("Displayed cards:" + generatedCards.join("  ")));
    console.log(alignCenterHorizontally("Entered cards  :" + userEnteredCards.join("  ")));
  }
  console.log(styles("emptyLine", lines));

  if (confirm("Want to play again")) {
    startGame();
  }

}

function startGame(numberOfCards = 8) {
  let generatedCards = generateCards(numberOfCards);
  displayCards(generatedCards);
  let userEnteredCards = takeUserInput(numberOfCards);
  displayResult(generatedCards, userEnteredCards);
}

function gameIntro() {
  gameTitleAnimation("MEMORY GAME");
  gameStartAnimation();
  countDown([number3Block(), number2Block(), number1Block()]);
  startGame();
}

gameIntro();
