/*  Create a faulty calculator using Javascript 

this faulty calculator does following:
1.It takes two numbers as input from the user
2. It performs wrong operations as follows:

+  ----> -
*  ----> +
-  ----> /
/  ----> **


It performs wrong operation 10% of the times
*/

let random=Math.random();

let a=prompt("Enter first number: ");
let b=prompt("Enter second number: ");
let c=prompt("Enter the Operation: ");

let obj={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


// If random <0.1  faulty operation(10%)
if(random>0.1){
    //  Perform correct claculation 
    alert(`The result is ${eval(`${a} ${c} ${b} `)}`)
}

//Otherwise - normal operation

else{
    //  Perform wrong calculation 
    c=obj[c]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}

