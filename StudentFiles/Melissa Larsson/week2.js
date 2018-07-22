#pragma strict

var start: Transform;
var end: Transform;

function Start () {
        transform.position = Vector3(2, 2, 2);
}

function Update () {
        transform.position = Vector3.MoveTowards(transform.position, end.transform.position, 10);
}
