let value1 = 0
let value2 = 1
let fabonacci = value1 + value2
//console.log("fabonacci:",fabonacci)

let limit = 1
while(limit <= 8){
  console.log(value1)
  value1 = value2
  value2 = fabonacci 

  fabonacci = value1 + value2

  
  limit= limit+1;
}
