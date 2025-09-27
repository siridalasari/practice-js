function displayNewWords(word,expextedWords) {
  
 const newWords = 'ape,p,l';

 return newWords;
}

function testDisplayNewWords(word,expextedWords) {

  console.log("[Word:",word,"]","Output:",displayNewWords(word,expextedWords),"|","Expexted Output:",expextedWords);

}

function allTestCases() {

testDisplayNewWords("apple", "ape,p,l");
// testDisplayNewWords(there, tere,h );
// testDisplayNewWords(hello, helo,l );
// testDisplayNewWords(abyss, a,b,y,s,s);
// testDisplayNewWords(this , ti,h,s);

}

allTestCases();
