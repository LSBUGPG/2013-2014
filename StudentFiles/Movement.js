#pragma strict

var start: Transform;
var end: Transform;

function Start () {
	transform.position = Vector3(3.3889, 2.189984, -1.028698);
}

function Update () {
	transform.position = Vector3.MoveTowards(transform.position, end.transform.position, .07);
}