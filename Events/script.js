let btn3=document.querySelector("#btn3");
btn3.onclick=() => {
    console.log("Button 3 was clicked.");
    let a = 25;
    a++;
    console.log(a); //26
}

let div=document.querySelector("div");
div.onmouseover=() => {
    console.log("Mouse is over the div.");
}