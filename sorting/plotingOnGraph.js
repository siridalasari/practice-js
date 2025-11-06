const plane = function (rows, colunms) {
  let graph = [];

  for (let rowInd = 0; rowInd < rows; rowInd++) {
    let row = [];

    for (let colInd = 0; colInd < colunms; colInd++) {
      row.push(backGroundColor(25," "));
    }

    graph.push(row.join(""));
  }

  graph[2][9] = "0"

  return graph.join("\n");
}

const backGroundColor = function (colorNo, string) {
  return `\x1B[48;5;23m ${string} \x1B[0m`;
}
const siri = plane(10, 10);
console.log(siri)
//console.log(backGroundColor(231, siri));
