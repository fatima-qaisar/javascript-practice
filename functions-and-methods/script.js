function myFunction(msg,n){ //parameter ->input
    console.log("I love coding.");
    console.log("Strawberries are the best.");
    console.log(msg); //console.log(msg*n); gives error NaN (Not a number)
}
myFunction("JavaScript",100); //argument

function sum(x, y){
    return x+y; //parameters are local variables for function. they have block scope.
}
console.log(sum(3,77));

//Multiplication Function
function product(x, y){
    return x*y;
}

//arrowProduct is a normal variable and its value can be changed. the function itself comes after the assignment operator.
const arrowProduct=(x, y)=>{ 
      return x*y;
};

console.log(arrowProduct);
let result=arrowProduct(6,7);
console.log(result);

const printHello=()=>console.log("Hello");

console.log(printHello());
console.log(printHello); 

let count=0;
function countVowels(str){
     for(const char of str){
        if(char=='a'||
           char=='e'||
           char=='i'||
           char=='o'||
           char=='u'){
            count++;
        }
     }
     return count;
}

let numOfVowels=countVowels("Rabbit");
console.log(numOfVowels);

const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if(char=='a'||
           char=='e'||
           char=='i'||
           char=='o'||
           char=='u'){
            count++;
        }
     }
     return count;
}
