#pragma strict

function OnTriggerEnter (Collider) {
		Destroy(gameObject);
	}
	//Code makes box disappear. 
	//The purposes of the boxes is two fold, they are used to be collected and display text when touched by the player (This script links to the objective javascript in this unity project).