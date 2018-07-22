#pragma strict

//this script fixes a bug which left the explosions animation on screen and
//it's purpose is to destroy the particles after a set amount of time

var lifeTimer: float;

function Start (){
	//destroy an object after a certain amount of time
    Destroy (gameObject, lifeTimer);
    
}