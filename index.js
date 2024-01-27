
let randomNumber1 = Math.floor(Math.random() *6) + 1;
let randomDiceimage = "dice"+randomNumber1+".png";
let randomImageSource = "images/"+randomDiceimage;
let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() *6)+1;
let randomDiceimage2 = "dice" + randomNumber2 +".png";
let randomeImageSource2 = "images/"+randomDiceimage2;
let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomeImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wims!"
}
else {
    document.querySelector("h1").innerHTML = "DRAW";
}