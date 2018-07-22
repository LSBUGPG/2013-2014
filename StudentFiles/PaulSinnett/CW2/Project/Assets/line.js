#pragma strict

var points: Transform [];

function Start () {

}

function Update () {

	if (points.length > 1) {
		Debug.DrawLine(points[0].position, points[1].position, Color.white);
	}
}