#pragma strict

var gameOverText : GUIText;
var Planets = 15;
private var gameOver : boolean; 


function Start () {

	gameOver = false;
	gameOverText.text = "";
}

function Update (){

	if(Planets <= 0){
	
		Dead();
		
	}
}

function GameOver (Remaining : int){

	Planets -= Remaining;
	Debug.Log ("i have: " + Planets);
}

function Dead(){

		gameOverText.text = "Nice you blew up a galaxy!!! no, really good job!";
		gameOver = true;

}
