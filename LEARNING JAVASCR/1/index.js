// 3 ways of makiing variable   "LET", "VAR", "CONST"

// var  name = "donald" 
// var  age = 21
// console.log(name);
// console.log(age);

var name = "james"
var  age = 21
var  boolean = "true || false"

// name = "John"
// age = 12
// boolean = "false || true"

alert("my name is " + name + ", i am " + age + " old " + "and it is " + boolean)

         //Name lenghth charcters

var  name = prompt("var 's meet you")
var  length = name.length
alert("The characters are " + length + " But it excceds our limit by " + (length - 10 ))

                        //OR

var  yourself = prompt("Describe yourself")
var  wordLength = yourself.length
if (wordLength <= 10) {
    alert("you have written " + wordLength + " words ")
}
else{
   alert(" remaining characters "+ (10-wordLength))
}

                            //SLICING AND EXTRACTING
var  myName = "james"
        // .slice(x,y)
var  trimm = myName.slice(0,3)

var  ops = myName.toLowerCase()
var  ops = myName.toUpperCase()


var  tweet = prompt("write your tweet");
var  length = tweet.length;
alert(tweet.slice(0,20));
                //OR
var  tweet = prompt("Compose your tweet");
var  tweetLength = tweet.slice(0,14);
alert(tweetLength);
                //OR
alert(prompt("Compose your tweet").slice(0,14));


        // using javascript string wtite a Program that alert hello, takes the users name from a prompt and alert the name so that the first letter is Uppercase

alert("Hello");
var named= prompt("What is your name?");
var userName = named.slice(0,1).toUpperCase() + named.slice(1).toLowerCase();
alert("Hello, " + userName + "!");

                //OR
alert("Hello");
var SurName = prompt("SurName")
var familyName = SurName.slice(0,1).toUpperCase() + SurName.slice(1).toLowerCase();
var FirstName = prompt("FirstName")
var normName = FirstName.slice(0,1).toUpperCase() + FirstName.slice(1).toLowerCase();
alert("Hello, " + familyName + " " + normName + "!");
                //OR    !! ON THE SAME PROMPT

let fullname = prompt("Username")
let spaceindex = fullname.slice(0, fullname.length).indexOf(" ");// Find space location using indexOf()
let firstname = fullname.slice(0, spaceindex);
let lastname = fullname.slice(spaceindex + 1);
alert(firstname.slice(0, 1).toUpperCase() + firstname.slice(1).toLowerCase() + " " + lastname.slice(0, 1).toUpperCase() + lastname.slice(1).toLowerCase());

                        // Function , fuctions with parameters(input)

function silk(money, age){
        let name = prompt("Name?")
        alert("Hello " + name + " paid " + money + " u r " + age)
        }
function james(){
        silk();
}
                                // USING FUNCTION TO CALCULATE

function silk(money, age){
        let name = prompt("Name?")
        alert("hello " + name )
        console.log("This is the sum of your profile "+entryRequirement ( money, age));
        return entryRequirement;
}
    
function entryRequirement(amountPaid, imputedAge){
        let repeatVar = (imputedAge + amountPaid)
        return repeatVar;
}

function calcBMI(weight, height){
        let bmi = weight / (height * height);
        return bmi;
}


                //Random numbers to whole numbers
Math.floor(Math.random()*6 +1)
                //Control Statement : if...., else if....,else....., ....
let Person1 = prompt("X?")
let Person2 = prompt("Y?")
let ranNum = Math.floor(Math.random()*100 +1)
if(ranNum <=30){
    alert("Both")
}
else if(ranNum >=31 && ranNum <= 69 ){
    alert("Try it can work maybe")
}
else{
    alert("None")
}
                //Comparater: ==.., ===.., !=.., !==.., >.. , <.. , <=.. , >=..
if (1 ="1"){
        alert("true")
}
else("false")
                // Combination of comparators: &&, ||, !
let weight = prompt("what is your wieght?")
let height = prompt("what is your height?")
let BMI = weight / (height * height);
if(BMI <=30){
    alert("underweight")
}
else if(BMI >=31 && BMI <= 69 ){
    alert("Fit")
}
else if (BMI >= 70){
    alert("Overwieght")
}
else{
        alert("Input data")
}
                //ARRAY 
let color = ["Blue","yellow","black","Red"]
let color1 = color[0]
color.push("purple") //adds to array
color.pop() //removes from array
color.includes("Red") //to check if it is included in the array

let names = ["elvis","silver","shadow","Cid","solomon","john","james","peter"]
let get = prompt("What is ur name")
let included = names.includes(get.toLowerCase())
if (included == true ){
 alert("Alr go ahead" )
}else {
 alert("Access denied" )
}
                //Loops For.. , While..
for(let i = 1; i < 10; i++){
        console.log(i)
}
 for(let i = 20; i < 10; i--){
        console.log(i)
}

//Write a program that count from 1-50 but console.log fizz for multiples of 3, buzz for multiples of 5and fizzbuzz for multiples of 3 and 5
for (let i = 1; i <= 50; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
          console.log("fizzbuzz");
        } else if (i % 3 == 0) {
          console.log("fizz");
        } else if (i % 5 == 0) {
          console.log("buzz");
        } else {
          console.log(i);
        }
      }
                        //Manipulating classes and attributes using DOM(Document Object Model)
//document.querySelector("the element or class or id").classList.add("Put a class.css here")
document.querySelector("h1").classList.add("Huge")
document.querySelector("div").classList.remove("mainDiv")
document.querySelector("h1").innerHTML = "<em>welcome btw</em>"
document.querySelector("a").setAttribute("href", "https://www.google.com")

//Project - DIce
$(document).keypress(function(){
        $("").html(event.key)
})