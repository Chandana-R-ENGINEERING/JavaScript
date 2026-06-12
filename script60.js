console.log("This is string tutorial");

let a="Chandu";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
//console.log(a[8]);   // OUTPUT Undefined

console.log(a.length);

let real_name="KaalBhairva";
let friend="People";
console.log("His name is " +real_name +" His friend name is "+friend);    // same old traditional method
console.log(`His name is ${real_name} His friend name is ${friend}`);
let b = "Shiva";
console.log(b.toUpperCase());
console.log(b.toLowerCase());         // both are functions so we write it with the parenthesis
console.log(b.replace("Shiva","ShivaLinga"));
console.log(b.concat(real_name));
console.log(real_name+b);
console.log(b.length);
console.log(b.slice(1,5));    // similar to python i.e.,,,  [1:5] where last index value is not included
console.log(b.slice(2));      //   [1:] starting from the index and upto the end  
console.log(a,real_name,b,"is saviour and protector of my life","and my life god Ragavendra swamy")
console.log(b.replace("a",1477));
console.log(b);  // As because Strings are immutable 




