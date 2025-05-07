// Creating a variable that will store the length of button selector to make for a neater code
let Numdrumbtn = document.querySelectorAll("button").length
// The count starts from 0 and stops at less than the length, because the counts usaually starts from 0
for(let i = 0; i < Numdrumbtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let innerHTML = this.innerHTML
        switch (innerHTML) {
            case "w":
                let tom1 = new Audio('sounds/tom-1.mp3');
                 tom1.play();
                break;
            case "a":
                let tom2 = new Audio('sounds/tom-2.mp3');
                 tom2.play();
                break;
            case "s":
                let tom3 = new Audio('sounds/tom-3.mp3');
                 tom3.play();
                break;
            case "d":
                let tom4 = new Audio('sounds/tom-4.mp3');
                 tom4.play();      
                 break;
            case "j":
                let snare = new Audio('sounds/snare.mp3');
                    snare.play();
                    break;
            case "k":
                let crash = new Audio('sounds/crash.mp3');
                    crash.play();
                    break;
            case "l":
                let kick = new Audio('sounds/kick-bass.mp3');
                    kick.play();
                    break;
           
            default:
                break;
        }
        
        
    })
}

//function makeSound(value) {
    
//}
// This helps us identify the innerHTML of the particular button being clicked
// calling the makeSound fuction
// calling the buttonAnimation function
// Adding the event listner to listen for keypress, we are tapping into the "event" parameter of the
//"addEventListener" function.
//Tapping into the "key" property of the "event" method (i.e event.key) in order to 
// identify the alphabet of the key that was triggerd during the keyboard press.
// calling the makeSound fuction
// calling the buttonAnimation function
// The "value" parameter here is like a placehodder that will be used to recieve whatever
// parameter(input) will be passed where ever the function is called within the program.
// Which in our case here is the mouse and keyboard event listners, with the "innerHTML"
// and "pressedKey" respectively.  
// This will take effect by default if non of the conditions are satisfied.
//NB: A fuction is useless without a parameter. Hence, our function "makeSound" has to depend on the
// parameters of the "innerHTML" and "pressedKey" , which will be substituted within its parameter
// of "key_value" in other to call it to action.
//NB: Functions are important when two or more objects have identical conditions.
// Adding Animation to our site
// using string concatination to add a "dot" to the lettered class name of the drum buttons
// from the HTML file as received from the button animation function parameter. 
// using "classList.add" to integrate the style in the css pressed class into our active button.
// using the "setTimeout" function to remove the pressed class after a specified time