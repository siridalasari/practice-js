const divisor = 2
let dividend = 65
let quotient = 0
let remainder =0
let binaryValue = 0
let i = 0;
let placeValue= 10;
console.log("Number:",dividend)
//console.log("divisor:",D10,"dividend:",dividend,"quotient:",quotient,"remainder:", remainder)

while( dividend > 0){
    //console.log("-------------------")
    remainder = dividend % divisor
    quotient = dividend / divisor
    
    if(dividend % 2 !== 0)
    {
        quotient = quotient - 0.5
    }
    
    
   console.log("divisor:",divisor,"dividend:",dividend,"quotient:",quotient,"remainder:", remainder)
    if(i === 0){
        binaryValue = remainder
        i++
    }
    else{
        binaryValue = binaryValue + remainder * placeValue
        for(let j=1 ; j <= i ; j++ ){
             placeValue = placeValue * 10
        }
    }
        
    
    
    dividend = quotient 

    
}
console.log("binary value:" ,binaryValue)
