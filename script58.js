// Functions

function nice(name) {
    console.log("Hey "+ name +" you are nice!")
    console.log("Hey "+ name +" you are good!")
    console.log("Hey "+ name +" you tshirt is nice!")
    console.log("Hey "+ name +" your course is good too!")
}

nice("Chandana")

function sum(a,b,c=3){
    // console.log(a+b+c)
    console.log(a,b,c)
    return a+b+c
}

result1=sum(3,6)
result2=sum(4,16)
result3=sum(14,9)

console.log("The sum of these numbers is:  ",result1)
console.log("The sum of these numbers is:  ",result2)
console.log("The sum of these numbers is:  ",result3)


//Arrow Function

const funct =(x)=>{
    console.log("I am arrow function",x)
}

funct(34);
funct(66);
funct(84);


