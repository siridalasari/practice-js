function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function encodeNum(data) {
  return "i" + data + "e";
}

function encodeStr(data) {
  return "" + data.length + ":" + data;
}

function encodeList(data) {
  let encodedString = "";
  for (let index = 0; index < data.length; index++) {
    encodedString += encode(data[index]);
  }

  return "l" + encodedString + "e";
}

function encode(data) {
  const type = typeof (data);

  switch (type) {
    case "number":
      return encodeNum(data);
    case "string":
      return encodeStr(data);
    case "object":
      return encodeList(data);
  }

}

let subBencodedString = " ";

function decodeNum(bencodedStr) {
  const endRange = bencodedStr.indexOf("e");

  subBencodedString = bencodedStr.slice(endRange + 1, bencodedStr.length);

  return parseInt(bencodedStr.slice(1, endRange));
}

function decodeStr(bencodedStr) {
  const range = bencodedStr.indexOf(":") + 1;
  const lengthInStr = bencodedStr.slice(0, range);
  const length = parseInt(lengthInStr) + 1;
  subBencodedString = bencodedStr.slice(length + lengthInStr.length - 1, bencodedStr.length + 1)
  return bencodedStr.slice(range, length + lengthInStr.length - 1);
}

function decodeList(bencodedStr) {
  const list = [];
  subBencodedString = bencodedStr.slice(1, bencodedStr.length - 1);

  while (subBencodedString.length > 0) {
    list.push(decode(subBencodedString));
  }

  return list;
}

function decode(bencodedStr) {
  const prefix = bencodedStr[0];

  switch (prefix) {
    case "i":
      return decodeNum(bencodedStr);
    case "l":
      return decodeList(bencodedStr);
    default:
      return decodeStr(bencodedStr);
  }

}

function testEncode(description, data, expectedOutput) {
  const encodedString = encode(data);
  const message = composeMessage(description, encodedString, expectedOutput);
  console.log(message);
}

function testDecode(description, bencodedStr, expectedOutput) {
  const decodedValue = decode(bencodedStr);
  const message = composeMessage(description, decodedValue, expectedOutput);
  console.log(message);
}

function chooseSymbol(encodedString, expectedOutput) {

  if (typeof (expectedOutput) === "object") {
    const symbol = areDeepEqual(encodedString, expectedOutput) ? "✅" : "❌";
    return symbol;
  }

  return encodedString === expectedOutput ? "✅" : "❌";
}

function composeMessage(description, encodedString, expectedOutput) {
  const symbol = chooseSymbol(encodedString, expectedOutput);
  if (symbol === "✅")
    return symbol + " " + description;
  return symbol + description + "\n  output  " + encodedString + "\n  expected  " + expectedOutput;
}

function printTitle(content) {
  console.log(" ".repeat(10) + content);
}

function encodeTestCases() {
  console.log("\nencode test cases\n");
  testEncode("number", 123, "i123e");
  testEncode("Negative number", -42, "i-42e");
  testEncode("zero", 0, "i0e");
  testEncode("1 word string", "hello", "5:hello");
  testEncode("Empty string", "", "0:");
  testEncode("more than 1 word string", "hello world", "11:hello world");
  testEncode("string with special charcters", "special!@#$chars", "16:special!@#$chars");
  testEncode("list with differnt types of elements", ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
  testEncode("empty list", [], "le");
  testEncode("nested list with elements", [0, "", ["test"]], "li0e0:l4:testee");
  testEncode("empty nested list ", ["", 0, []], "l0:i0elee");
  testEncode("nested list", ["one", ["two", ["three"]]], "l3:onel3:twol5:threeeee");
  console.log("\n")
}

function decodeTestCases() {
  console.log("decode test cases\n");
  testDecode("number", "i123e", 123);
  testDecode("negative Number", "i-42e", -42);
  testDecode("zero", "i0e", 0);
  testDecode("one word string", "5:hello", "hello");
  testDecode("empty string", "0:", "");
  testDecode("string with more than one word", "11:hello world", "hello world");
  testDecode("string with special characters", "16:special!@#$chars", "special!@#$chars");
  testDecode("different types of elemets with nested list", "l5:applei123el6:bananai-5eee", ["apple", 123, ["banana", -5]]);
  testDecode("different types of elemets with nested list", "l5:applei123el6:bananali-5eeee", ["apple", 123, ["banana", [-5]]]);
  testDecode("empty list", "le", []);
  testDecode("nested list", "li0e0:l4:testee", [0, "", ["test"]]);
  testDecode("empty nested list", "l0:i0ele", ["", 0, []]);
  testDecode("nested list with same type elements", "l3:onel3:twol5:threeeee", ["one", ["two", ["three"]]]);
}

function main() {
  encodeTestCases();
  decodeTestCases();
}

main(); 