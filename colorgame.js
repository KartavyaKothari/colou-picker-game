var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpButtons();
    reset();
}

function setUpModeButtons(){
    for(var i = 0 ; i < mode.length ; i ++){
        mode[i].addEventListener("click",function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent==="Easy"?numOfSquares=3:numOfSquares=6;
            reset();
        })
    }
}

function setUpButtons(){
    for( var i = 0 ; i < squares.length ; i++){
        squares[i].addEventListener("click",function(){
            if(this.style.backgroundColor===pickedColor){
                messageDisplay.textContent = "Correct";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent="Play again";
            }else {
                messageDisplay.textContent = "Try again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function reset(){
    messageDisplay.textContent = "";
    resetButton.textContent = "New colors";
    colors = getColorArray(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0 ; i < squares.length ; i++)
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else squares[i].style.display = "none";

    h1.style.backgroundColor = "steelblue";
}

function changeColors(colors){
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = colors;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function getColorArray(num){
    var arr = [];

    for(var i = 0 ; i < num ; i ++){
        arr.push(generateRandomColor());
    }

    return arr;
}

function generateRandomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}

resetButton.addEventListener("click",reset);