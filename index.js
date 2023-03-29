var randomNumber1 = Math.random()*6;
var num1 = Math.floor(randomNumber1) + 1;
var img1_src = "images/dice"+num1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1_src);

var randomNumber2 = Math.random()*6;
var num2 = Math.floor(randomNumber2) + 1;
var img2_src = "images/dice"+num2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2_src);

if(num1>num2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(num2>num1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}