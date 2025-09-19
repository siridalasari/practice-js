const binaryValue = 10101
const divisor=10
let remainder =0;
let quotient = 0;

let substring = 101;


console.log("original Binary value",binaryValue)

while( binaryValue > 0){
    //console.log("-------------------")
    remainder = binaryValue % divisor
    quotient = binaryValue / divisor
    if(binaryValue % 2 !== 0)
    {
        quotient = quotient - 0.1
    }  
   // console.log("divisor:",divisor,"dividend:",dividend,"quotient:",quotient,"remainder:", remainder)
    binaryValue = quotient   
    console.log("compare bit:", remainder)   
    console. log("Next Binary value",binaryValue)
}

while( binaryValue > 0){
    //console.log("-------------------")
    remainder = binaryValue % divisor
    quotient = binaryValue / divisor
    if(binaryValue % 2 !== 0)
    {
        quotient = quotient - 0.1
    }  
   // console.log("divisor:",divisor,"dividend:",dividend,"quotient:",quotient,"remainder:", remainder)
    binaryValue = quotient
    console.log("compare bit:", remainder)   
    console. log("Next Binary value",binaryValue)

}
