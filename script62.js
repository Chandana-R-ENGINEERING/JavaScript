// Bussiness Name Generator


const adjectives={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}

const shopname={
    4:"Engine",
    5:"Foods",
    6:"Garments"
}

const anotherword={
    7:"Bros",
    8:"Limited",
    9:"Hub"
}

// The funciton generates the random number from min to max

function randNumGenerator(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

let rand1=randNumGenerator(1,4);
let rand2=randNumGenerator(4,7);
let rand3=randNumGenerator(7,10);

let BussinessName=adjectives[rand1]+shopname[rand2]+anotherword[rand3]

console.log(BussinessName)




// // Template Literals
//  let name="Chandana";

//  console.log("Hello" +  name);                         // Concatenation
//  console.log(`Hello ${name}`);

//  let a=4;
//  let b=6;

//  console.log(`sum is ${a+b}`);                       //In Python we will be using format specifier 
