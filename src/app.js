console.log("JS is running!");

import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let who = ['The cat ', 'Batman ', 'A pink flamingo ', 'Jennifer Lopez '];
let action = ['bit ', 'peed on ', 'flew off with ', 'shredded '];
let what = ['my homework ', 'my phone ', 'my computer ', 'the car '];
let when = ['before the class.', 'when I was sleeping.', 'while I was exercising.', 'during my lunch.', 'while I was watching Star Wars.'];

let randomWho = who[Math.floor(Math.random() * who.length)];

let randomAction = action[Math.floor(Math.random() * action.length)];

let randomWhat = what[Math.floor(Math.random() * what.length)];

let randomWhen = when[Math.floor(Math.random() * when.length)];

let excuse = `My excuse: ${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

document.getElementById("excuse").innerHTML = excuse;
};
