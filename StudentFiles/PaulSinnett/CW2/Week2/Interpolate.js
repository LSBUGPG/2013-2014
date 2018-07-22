#pragma strict

var from: Transform;
var to: Transform;

var amount: float = 0;

function Update() {
	
	amount += Time.deltaTime;
	transform.position = Vector3.Lerp(from.position, to.position, Mathf.Repeat(amount, 1));
}
