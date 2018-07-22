#pragma strict

var placeA: Transform;
var placeB: Transform;
var placeC: Transform;
var placeD: Transform;

var platformSpeed = 1.0;

var placeCount: int = 0;

//var placeSwitch = false;


function Start () {



}

function Update () {

		if(transform.position == placeA.position) {
			placeCount = 1;
		}
		if(transform.position == placeB.position) {
			placeCount = 2;
		}
		if(transform.position == placeC.position) {
			placeCount = 3;
		}
		if(transform.position == placeD.position) {
			placeCount = 0;
		}
		
		
		if(placeCount == 0)
		{
		transform.position = Vector3.MoveTowards (transform.position, placeA.position, platformSpeed);
		}
		if(placeCount == 1)
		{
		transform.position = Vector3.MoveTowards (transform.position, placeB.position, platformSpeed);	
		}
		if(placeCount == 2)
		{
		transform.position = Vector3.MoveTowards (transform.position, placeC.position, platformSpeed);	
		}
		if(placeCount == 3)
		{
		transform.position = Vector3.MoveTowards (transform.position, placeD.position, platformSpeed);	
		}



}