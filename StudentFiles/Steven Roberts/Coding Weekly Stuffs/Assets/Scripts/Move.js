#pragma strict

var start : Transform;
var end : Transform;
var progress : float = 0;

function Start () {

}

function Update () {
	transform.position += start.position + (end.position - start.position) * progress;
	progress += Time.deltaTime;

}