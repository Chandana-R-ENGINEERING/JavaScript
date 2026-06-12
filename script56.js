console.log("Hello I am Conditional Tutorial")

let age=1;
//Arithematic operators
// let grace=20;
// age+=grace;

// console.log(age)
// console.log(age+grace)
// console.log(age-grace)
// console.log(age*grace)
// console.log(age/grace)
// console.log(age**grace)
//console.log(age%grace)
/*
I am a 
Multiline 
comment

*/ 
if(age==18){
    console.log("You can drive")
}

else if (age==0) {
    console.log("Are you kidding?!")
} 

else if(age==1){
    console.log("Again are you Kidding ?")
}
    
else{
    console.log("You cannot drive")
}


//Ternary Operator
a=6;
b=8;
let c=a>b? (a-b) : (b-a);
console.log(c)

// translates to :
// if (a>b){
//     let c=a-b;
// }

// else{
//     let c=a-b;
// }


//Logical Opertors

 age=2;
 console.log(age>=10 && age<=20)  //question 01
n=2;                              //question 03 and 04
// if(n%2==0 && n%3==0){
//     console.log("Yes it is divisible")
// }
// else{
//     console.log("Not Divisible by both ")
// }

console.log(n%2==0 && n%3==0)                     //&&- AND 
console.log(n%2==0 || n%3==0)                     //||-  OR

//Ternary Operator       question 05
age=9;
let d=age>18? ("You can drive") : ("You cannot drive");                    
console.log(d)


// Question 02 Switch Statements

let day =6;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
        
    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thrusday");
        break;

    case 5:
        console.log("Friday");6
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
         console.log("Sunday");
        break;
        
        
}

