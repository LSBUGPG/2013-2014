#pragma strict

var placeA: Transform;
var placeB: Transform;


var platformSpeed = 1.0;


var placeSwitch = false;


function Start () {



}

function Update () {

if(transform.position == placeA.position)
		{
			placeSwitch = true;
		}
			if(transform.position == placeB.position)
		{
			placeSwitch = false;
		}
		if(placeSwitch)
		{
		transform.position = Vector3.MoveTowards (transform.position, placeB.position, platformSpeed);
		}
		else
		{
		transform.position = Vector3.MoveTowards (transform.position, placeA.position, platformSpeed);	
		}



}