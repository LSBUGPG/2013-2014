#pragma strict

var from: Transform;
var to: Transform;

var progress: float = 0;
function Start () {

}

function Update () {

progress += Time.deltaTime;
transform.position = Vector3.Lerp(from.position, to.position, Mathf.PingPong(progress, 1));

}