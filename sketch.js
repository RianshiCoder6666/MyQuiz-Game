var canvas, backgroundImage;
var questions;
var question, contestant, quiz;

function setup(){
  createCanvas(1200,500);
  
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(181, 242, 245);
}
