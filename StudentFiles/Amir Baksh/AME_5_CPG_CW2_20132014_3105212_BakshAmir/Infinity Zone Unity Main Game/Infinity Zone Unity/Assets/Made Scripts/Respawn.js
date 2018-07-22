#pragma strict
var section1:Transform;
var ballController: Transform;

function Start () { 
	SendMessage ("Spawn");
}

function Update () { 
	if (transform.position.y < 40 ) {
		SendMessage ("Spawn");
	}
}

function Spawn () { 
	transform.position = section1.position;
	transform.rotation = section1.rotation;
	ballController.position = section1.position;	
	ballController.rotation = section1.rotation;
	Physics.gravity = -section1.up * Physics.gravity.magnitude;
}
function SetCheckpoint (Checkpoint:Transform) { 
	section1=Checkpoint;
	
}
