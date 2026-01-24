console.log("hello");
window.console.log("hello");
console.log(window);
console.dir(window); //both can be used to print the window object

console.log(document); //to access html i javascript   //window is global object
console.dir(window.document); //to see properties of document
//console.log ->prints object as an elemnet. we can print the DOM elements directly -> html code 
//console.dir ->to print properties and methods of special objects. it is also a part of the window object. ->object gets printed

console.log(document.body);
console.dir(document.body.childNodes[1]); //childNodes -> aik node mai kitne nodes hain
console.dir(document.head);
document.body.childNodes[5].innerText= "Hello. How are you";
let heading=document.getElementById("heading");//this will return value which can be saved in a variable.
console.dir(heading);
let texts=document.getElementsByClassName("text"); //returns an html collection -> very similar to an array
console.dir(texts)
console.log(texts);
