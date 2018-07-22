#pragma strict

var start: Transform;

var end: Transform;

var progress: float = 0;

function Start () {

}

function Update () {

	progress += Time.deltaTime;
	transform.position = start.position + (end.position - start.position) * progress;

}