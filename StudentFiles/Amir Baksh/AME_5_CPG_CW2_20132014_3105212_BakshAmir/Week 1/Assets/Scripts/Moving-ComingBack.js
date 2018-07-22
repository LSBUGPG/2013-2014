#pragma strict
var start: Transform;
var end: Transform;
var force: float = 10;

function Start () {

	//transform.position = start.position;
}

function Update () { 

	if (Vector3.Distance(transform.position, end.position) < transform.localScale.z * 0.5) {
		var temp: Vector4 = start.position; 
		start.position = end.position;
		end.position = temp;
		start.Rotate(0, 180, 0); 
		end.Rotate(0, 180, 0); 
	}
	
	rigidbody.AddForce(start.forward * force);

}