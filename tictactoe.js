var player1 = "Player 1";
var player2 = "Player 2";
var p1Score = 0; 
var p2Score = 0; 
var ties = 0;
var move = 0;
var play = true;

function playGame(x) {
    //place X's and O's and increment 'move' variable
    if (play) {
        if ((move % 2 == 0) && (document.getElementById(x).innerHTML == "")) {
    	   var y = document.getElementById(x).innerHTML = "X";
           document.getElementById("outcome").innerHTML = player2 + "'s Move!";
           move++;
        }
        else if ((move % 2 == 1) && (document.getElementById(x).innerHTML == "")){
           var z = document.getElementById(x).innerHTML = "O";
           document.getElementById("outcome").innerHTML = player1 + "'s Move!";
           move++;
        }
    }

    //set div element to variables for Win/Draw check
    var box1 = document.getElementById("box1").innerHTML;
    var box2 = document.getElementById("box2").innerHTML;
    var box3 = document.getElementById("box3").innerHTML;
    var box4 = document.getElementById("box4").innerHTML;
    var box5 = document.getElementById("box5").innerHTML;
    var box6 = document.getElementById("box6").innerHTML;
    var box7 = document.getElementById("box7").innerHTML;
    var box8 = document.getElementById("box8").innerHTML;
    var box9 = document.getElementById("box9").innerHTML;

    //Check for Player 1 win
    if (((box1 == y) && (box2 == y) && (box3 == y)) || ((box4 == y) && (box5 == y) && (box6 == y)) || ((box7 == y) && (box8 == y) && (box9 == y)) || ((box1 == y) && (box5 == y) && (box9 == y)) || ((box7 == y) && (box5 == y) && (box3 == y))  || ((box1 == y) && (box4 == y) && (box7 == y))  || ((box2 == y) && (box5 == y) && (box8 == y)) || ((box3 == y) && (box6 == y) && (box9 == y))) 
    {
    	document.getElementById("outcome").innerHTML = player1 + " Wins In " + move + " Moves!";
        play = false;
        p1Score++; //add to player1 score counter
        document.getElementById("player1").innerHTML = "Player 1: " + p1Score;
    }
    //Check for Player 2 win;
    else if (((box1 == z) && (box2 == z) && (box3 == z)) || ((box4 == z) && (box5 == z) && (box6 == z)) || ((box7 == z) && (box8 == z) && (box9 == z)) || ((box1 == z) && (box5 == z) && (box9 == z)) || ((box7 == z) && (box5 == z) && (box3 == z))  || ((box1 == z) && (box4 == z) && (box7 == z))  || ((box2 == z) && (box5 == z) && (box8 == z)) || ((box3 == z) && (box6 == z) && (box9 == z))) 
    {	
        document.getElementById("outcome").innerHTML = player2 + " Wins In " + move + " Moves!";
        play = false;
        p2Score++;//add to player2 counter
        document.getElementById("player2").innerHTML = "Player 2: " + p2Score; 
    }
    //If board is full and no win, set to draw
    else if (move == 9) 
    {
        document.getElementById("outcome").innerHTML = "Draw!";
        ties++; //add to tie counter
        document.getElementById("ties").innerHTML = "Ties: " + ties;
    }  
}

function restartGame() {
    move = 0; //resets first move to letter X
    play = true; //after check win, needs to be true for playGame function to restart

    //reset the Divs to blank
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = ""; 

    //initial player move text reset
    document.getElementById("outcome").innerHTML = "Player 1's Move!";
}

//reset total scores 
function clearBoard() {
    document.getElementById("player1").innerHTML = "Player 1: 0";
    document.getElementById("player2").innerHTML = "Player 2: 0";
    document.getElementById("ties").innerHTML = "Ties: 0";
}
