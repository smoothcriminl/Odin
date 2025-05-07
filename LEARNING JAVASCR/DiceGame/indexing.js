let ranNum1 = Math.floor(Math.random()*6 +1);
let ranimage1 = "images/dice"+ ranNum1 +".png";
let imgstore = document.querySelector(".dice1").setAttribute("src", ranimage1);

let ranNum2 = Math.floor(Math.random()*6 +1);
let ranimage2 = "images/dice" + ranNum2 + ".png"
let imgstore2 = document.querySelector(".dice2").setAttribute("src", ranimage2);

if( ranNum1> ranNum2){
    document.querySelector("h1").innerHTML="<em>Player 1 wins!</em>";
}
else if(ranNum2 > ranNum1 ){
    document.querySelector("h1").innerHTML="<em>Player 2 wins!</em>";
}
else{
    document.querySelector("h1").innerHTML="<em>its a tie</em>";
}