let cards = ["❤️", "😍", "🤬", "🎀", "⭐️", "🤮", "🤡", "🥶", "❤️", "😍", "🤬", "🎀", "⭐️", "🤮", "🤡", "🥶"];
let hideCards = ["⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️", "⬜️"];
const cardNumbers = [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10", "11", "12", "13", "14", "15", "16"]
let score = 0;
let chancesLeft = 18;
let foundedCards = "abc";
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

function displayResult(userGuess) {

  const stringCards = cards.join();
  const stringUserGuess = hideCards.join();
  const hasGuessed = stringCards === stringUserGuess;
  const message = hasGuessed ? "HURRAY! YOU WON" : "YOU LOST! Better Luck Next Time";
  const symbol = hasGuessed ? "👏" : "👎";
  const lines = hasGuessed ? 16 : 14;

  resultBoard(symbol, message);

  if (!hasGuessed) {
    console.log("\n".repeat(1))
    console.log(alignCenterHorizontally("Displayed cards:" + cards.join("  ")));
    console.log(alignCenterHorizontally("                " + cardNumbers.join("  ")));
    console.log(alignCenterHorizontally("Entered cards  :" + hideCards.join("  ")));
  }
  console.log(styles("emptyLine", lines));

  if (confirm("Want to play again")) {
    suffelCards();
  }

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

function leftPadding(message, column = 127) {
  const emptyColunms = column - message.length;
  const leftPad = Math.floor(emptyColunms / 2) + message.length;

  return message.padStart(leftPad)
}

function alignCenterHorizontally(message, column = 127) {
  const leftPaddedMsg = leftPadding(message, column)
  return leftPaddedMsg.padEnd(column);
}

function random() {
  return Math.floor(Math.random() * 10);
}

function spaceBetween(object1, object2, totalSpace) {
  let remainingSpace = totalSpace - (object1.length + object2.length);
  return object1.padEnd(object1.length + remainingSpace) + object2;
}

function swapCards(card1Index, card2Index) {
  let container = cards[card1Index];
  cards[card1Index] = cards[card2Index];
  cards[card2Index] = container;
}

function showCards() {
  console.clear();
  console.log("\n".repeat(2));
  console.log(leftPadding("SCORE :" + score + "     CHANCES_LEFT:" + chancesLeft, 30));
  console.log("\n".repeat(13));
  console.log(alignCenterHorizontally(hideCards.join("  ")));
  console.log(alignCenterHorizontally(cardNumbers.join("  ")));
}

function areSame(card1, card2) {
  if (hideCards[card1] !== hideCards[card2]) {
    hideCards[card1] = "⬜️";
    hideCards[card2] = "⬜️";
  } else {
    score = score + 1;
    foundedCards = foundedCards + card1 + " " + card2;
  }
  chancesLeft = chancesLeft - 1;
  showCards();
  console.log("\n".repeat(3))
  revealCards();
}

function isValid(input) {
   if(input > 15 || input < 0 ) {
    console.log("\n")
    console.log(alignCenterHorizontally(`🥴${input}  Invalid Input ❌ (1 to 16 ✅)`));
    delayTime(15);
    return revealCards();
   }
   if(("" + input).includes(foundedCards)) {
    console.log(input , foundedCards)
    console.log(alignCenterHorizontally(`🤦‍♀️${input}  Its Already done`))
    delayTime(15);
    return revealCards();
   }
 return input;
}

function userInputcard1No() {
 const card1 = prompt(leftPadding("Card1_No: ")) - 1
 isValid(card1)
}


function revealCards() {
  if(chancesLeft === 0 || score === 8) {
    displayResult();
  }
  showCards();
  console.log("\n".repeat(3));
  const card1 = isValid(prompt(leftPadding("Card1_No: ")) - 1);
  const card2 = isValid(prompt(leftPadding("Card2_No: ")) - 1);
  if(card1 === card2) {
    console.log("\n\n")
    console.log(alignCenterHorizontally(`🥴 [Card1 : ${card1 + 1} Card2 : ${card2 + 1}] Should'nt be Same`))
    delayTime(15);
    revealCards();
  }
  console.log(cards[card1], cards[card2])
  hideCards[card1] = cards[card1];
  hideCards[card2] = cards[card2];
  showCards();
  delayTime(5);
  areSame(card1, card2);
}

function displayCards() {
  showCards();
  revealCards();
}

function suffelCards() {

  for (let suffelCount = 0; suffelCount < 1000; suffelCount++) {
    let suffelCard = random();
    swapCards(suffelCard, Math.abs(15 - suffelCard));
  }
  displayCards();
}


suffelCards();
