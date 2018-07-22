#pragma strict

var target : Transform;
var shot : Transform;
var velocity: float = 10.0;
var angle: float = 1.0;

function Start () {

}

function Shoot (){
	var range: float = Mathf.Abs(transform.position.x - target.transform.position.x);
	var ratio: float = (Physics2D.gravity.magnitude*range)/(velocity*velocity);
	if(ratio > = -1.0 && ratio <= 1.0) {
	angle = 0.5 * Mathf.Asin
	
	shot.transform.position = transform.position;
	shot.rigidbody2D.velocity = Vector2(Mathf.Sin(angle) * velocity, Mathf.Cos(angle)* velocity);

	}
}
function Update () {
	if (shot.transform.position.y < transform.position.y);{
	Shoot();

	}
}