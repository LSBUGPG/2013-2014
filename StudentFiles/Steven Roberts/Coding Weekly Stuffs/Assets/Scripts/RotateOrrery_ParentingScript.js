#pragma strict

var sphere1: GameObject;
var sphere2: GameObject;
var sphere3: GameObject;
var speed1: float;
var speed2: float;

function Start () {
	sphere2.transform.parent = sphere1.transform;
	sphere3.transform.parent = sphere2.transform;
}

function Update () {
	sphere1.transform.Rotate(Vector3.right * speed1);
	sphere2.transform.Rotate(Vector3.right * speed2);

}