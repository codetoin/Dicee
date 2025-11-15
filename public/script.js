var randomNumber1 = Math.random();
randomNumber1 = Math.round(randomNumber1 * 5) + 1;


var randomNumber2 = Math.random();
randomNumber2 = Math.round(randomNumber2 * 5) + 1;


var randomDiceImage1 = "dice" + randomNumber1 + ".png";
// console.log(randomDiceImage1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
// console.log(randomDiceImage2);

var randomImageSource1 = "./images/" + randomDiceImage1;
// console.log(randomImageSource1);
var randomImageSource2 = "./images/" + randomDiceImage2;
// console.log(randomImageSource2);



document.querySelector(".img1").setAttribute("src", randomImageSource1);
document.querySelector(".img2").setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else {
    document.querySelector("h1").innerHTML = "Draw!";

}
