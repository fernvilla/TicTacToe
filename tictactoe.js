var player1 = "X";
var player2 = "O";
var move = 0;

function playGame(x){
    if ((move % 2 == 0) && document.getElementById(x).innerHTML == "") {
	   var y = document.getElementById(x).innerHTML = player1;
       document.getElementById("outcome").innerHTML = player2 + "'s move!";
    }
    else if (document.getElementById(x).innerHTML == ""){
        var z = document.getElementById(x).innerHTML = player2;
        document.getElementById("outcome").innerHTML = player1 + "'s move!";
    }
    else{};

    var box1 = document.getElementById("box1").innerHTML;
    var box2 = document.getElementById("box2").innerHTML;
    var box3 = document.getElementById("box3").innerHTML;
    var box4 = document.getElementById("box4").innerHTML;
    var box5 = document.getElementById("box5").innerHTML;
    var box6 = document.getElementById("box6").innerHTML;
    var box7 = document.getElementById("box7").innerHTML;
    var box8 = document.getElementById("box8").innerHTML;
    var box9 = document.getElementById("box9").innerHTML;

    if(((box1 == y) && (box2 == y) && (box3 == y)) || ((box4 == y) && (box5 == y) && (box6 == y)) || ((box7 == y) && (box8 == y) && (box9 == y)) || ((box1 == y) && (box5 == y) && (box9 == y)) || ((box7 == y) && (box5 == y) && (box3 == y))  || ((box1 == y) && (box4 == y) && (box7 == y))  || ((box2 == y) && (box5 == y) && (box8 == y)) || ((box3 == y) && (box6 == y) && (box9 == y)))
    {
    	document.getElementById("outcome").innerHTML = player1 + " wins!";
 	}
    
    else if (((box1 == z) && (box2 == z) && (box3 == z)) || ((box4 == z) && (box5 == z) && (box6 == z)) || ((box7 == z) && (box8 == z) && (box9 == z)) || ((box1 == z) && (box5 == z) && (box9 == z)) || ((box7 == z) && (box5 == z) && (box3 == z))  || ((box1 == z) && (box4 == z) && (box7 == z))  || ((box2 == z) && (box5 == z) && (box8 == z)) || ((box3 == z) && (box6 == z) && (box9 == z)))
    {	
        document.getElementById("outcome").innerHTML = player2 + " wins!";
    }

    else if (move == 8) {
        document.getElementById("outcome").innerHTML = "Draw!";
    }

    else{};

    move++;    
};
