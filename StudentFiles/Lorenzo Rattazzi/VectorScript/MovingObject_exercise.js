#pragma strict

var start: Transform;
var stepA: Transform;
var stepB: Transform;
var stepC: Transform;
var stepD: Transform;
var end: Transform;

var progress: float = 0;

function Start () {

}

function Update () {

progress += Time.deltaTime;
transform.position = start.position + (stepA.position - start.position) * progress;
transform.position = stepA.position + (stepB.position - stepA.position) * progress;
transform.position = stepB.position + (stepC.position - stepB.position) * progress;
transform.position = stepC.position + (stepD.position - stepC.position) * progress;
transform.position = stepD.position + (end.position - stepD.position) * progress;}