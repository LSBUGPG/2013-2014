#pragma strict

var sphere1: GameObject;
var sphere2: GameObject;
var sphere3: GameObject;
var speed: float;
var speed2: float;

function Start () {

}

function Update () {
	sphere1.transform.Rotate(Vector3.right * speed);
	sphere2.transform.Rotate(Vector3.right * speed2);
}