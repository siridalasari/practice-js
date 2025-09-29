
function checkIsVowel(alphabet) {
  switch (alphabet) {
    case 'a': return true;
    case 'e': return true;
    case 'i': return true;
    case 'o': return true;
    case 'u': return true;
    default: return false;
  }
}

function removeCommaAtEnd(commaWord) {
  const len = commaWord.length - 1;
  let myword = "";
  for (let wordIndex = 0; wordIndex < len; wordIndex++) {
    myword = myword + commaWord[wordIndex];
  }
  return myword;
}

// function findByAlternatingVowelsAndConsonants() {

// }

function splittingWord(word) {

  let final = "";
  let nextWord = word;
  let remainingLetters;

  while (nextWord.length > 1) {
    let updatedWord = nextWord;
    let isVowel = checkIsVowel(updatedWord[0]);
    let wordDiscovery = updatedWord[0];
    let isNextShouldBeVowel = !isVowel;
    nextWord = "";
    remainingLetters = '';

    for (let index = 0; index < updatedWord.length - 1; index++) {
      isVowel = checkIsVowel(updatedWord[index + 1]);
      if (isVowel === isNextShouldBeVowel) {
        wordDiscovery = wordDiscovery + updatedWord[index + 1];
        isNextShouldBeVowel = !isNextShouldBeVowel;
      } else {
        remainingLetters = remainingLetters + updatedWord[index + 1] + ",";
        nextWord = nextWord + updatedWord[index + 1];
      }
    }
    final = (remainingLetters === "") ? final + wordDiscovery : final + wordDiscovery + ",";

  }

  remainingLetters = removeCommaAtEnd(remainingLetters);
  remainingLetters = (remainingLetters === ",") ? "" : remainingLetters;
  return final + remainingLetters;
}


function composeMessage(word, testResult, expectedWords) {

  const symbol = (expectedWords === splittingWord(word)) ? "✅" : "❌";
  let messege = symbol + "[Word:" + word + "]" + "  ";
  messege = messege + "Output:" + testResult + "  ";
  messege = messege + "ExpectedOutput: " + expectedWords;
  return messege;
}

function testDisplayNewWords(word, expectedWords) {
  console.log("-------------------------------------");
  let result = splittingWord(word);
  console.log(composeMessage(word, result, expectedWords));
}

function allTestCases() {

  testDisplayNewWords("apple", "ape,p,l");
  testDisplayNewWords("there", "tere,h");
  testDisplayNewWords("hello", "helo,l");
  testDisplayNewWords("abyss", "ab,y,s,s");
  testDisplayNewWords("this", "tis,h");
  testDisplayNewWords("himanshuu", "himanu,su,h");
  testDisplayNewWords("aabbeecciiddooffuu", "abecidofu,abecidofu");
  testDisplayNewWords('abcdfgh', 'ab,c,d,f,g,h');
  testDisplayNewWords('three', 'te,he,r');


}

allTestCases();


// himanshuu
// himanu-- > shu;

// shu
// su-- u
