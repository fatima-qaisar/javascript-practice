let numbers=[99, 92, 95, 97];
console.log(numbers);
console.log(numbers.length); //array property 
console.log(typeof numbers); //array itself is an object type
console.log(numbers[0]);
console.log(numbers[6]);
numbers[0]=75;             // array is mutable. string is immutable
let heroes=['ironman', 'superman', 'spiderman', 'hulk', 'antman'];

//for loop
for(let i=0; i<heroes.length ;i++){
    console.log(heroes[i]);
}

//for of loop
for(let hero of heroes){
    console.log(hero.toUpperCase());
}

//Practice  q1
let marks=[85, 97, 44, 37, 76, 60]
let sum=0;
for(let i=0; i<marks.length ;i++){
    sum+=marks[i];
}

let average=sum/marks.length;
console.log(`Total marks of the class= ${sum}`);  //template literal 
console.log(`Average marks of the class= ${average}`);

//Practice q2



