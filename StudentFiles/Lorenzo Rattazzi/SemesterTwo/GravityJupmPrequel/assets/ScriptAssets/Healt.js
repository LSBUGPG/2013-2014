#pragma strict

var Health = 100;
var GameOverObject : Transform;

function Update (){

	if(Health <= 0){
	
		Dead();
		
		GameOverObject.SendMessage("GameOver", 1 );
	}
}

function ApplyDammage (theDammage : int){

	Health -= theDammage;
}

function Dead(){

	Destroy (gameObject);

}