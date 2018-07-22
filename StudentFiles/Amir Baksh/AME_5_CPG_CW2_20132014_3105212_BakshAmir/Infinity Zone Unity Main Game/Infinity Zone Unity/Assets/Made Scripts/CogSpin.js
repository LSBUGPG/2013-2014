#pragma strict

var spinx : float = 0;
var spiny : float = 0;
var spinz : float = 0;

function Update () {
	transform.Rotate(spinx, spiny, spinz);

}