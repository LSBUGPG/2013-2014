#pragma strict

var randomRotate: float;

function Start () {

    rigidbody.angularVelocity = Random.insideUnitSphere * randomRotate; 
}