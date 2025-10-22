const plane = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
]
let column = [20, 30, 25, 75, 65, 5, 50, 60, 100, 80];
function delayTime(seconds) {

  for (let count = 0; count < seconds * 100000000; count++) {
  }

}

function random() {
  return (Math.random() * 10);
}

function planeInString() {
  const stringPlane = [];
  for (let index = 0; index < plane.length; index++) {
    stringPlane.push(plane[index].join(" "));
  }
  console.log(stringPlane.join("\n"));
  return stringPlane;
}


function addSpaces(string) {
  const count = Math.floor(Math.random() * 10);
  //  console.log(count, column[count]);
  const space = "\n" + (" ".repeat(column[count]));
  console.log(space)
  return string.join(space);
}

function displayRandomOnScreen(string) {


  for (let index = 0; index < 50; index++) {
    console.clear();

    console.log("\n".repeat((Math.random() * 10) + 8));
    console.log(addSpaces(string));
    delayTime(20);
  }
}


let string = "";
for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) {
    plane[x][y] = (x - 5) ** 2 + (y - 5) ** 2 > 3 ** 2 ? " " : '*';
  }
  console.clear();
  console.log("\n".repeat(6))
  string = planeInString();
  delayTime(10);
}

displayRandomOnScreen(string);

function colors(string) {
  const colorNo = Math.floor(Math.random() * 256);
  console.log(`\x1B[38;5;${colorNo}m ${string} \x1B[0m`);
}
