#pragma strict

var start: Transform;
var end: Transform;
var d: float = 0.0f;

function Start () {

}

function Update () {

	d += Time.deltaTime;
	
	if( d > 1.0f ) {
		d = 0.0f;
		var temporary: Transform = start;
		start = end;
		end = temporary;
	}
	
	transform.position = Vector3.Lerp(start.position, end.position, d);
}
