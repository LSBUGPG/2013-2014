#pragma strict

var theBall: Rigidbody;
var jumpForce: float = 5;
var speed: float = 1;
var brakeAmount: float = 2;

var time: float = 0.0;
var initialScale: Vector3 = Vector3(1.0, 1.0, 1.0);
var targetScale: Vector3 = Vector3(1.0, 1.0, 1.0);
var hover: float = 0.0;

enum State {
	Growing,
	Shrinking,
	Restoring,
	Fixed
};

var left: boolean = false;
var right: boolean = false;
var back: boolean = false;
	

var state: State = State.Fixed;

function Start () {

	initialScale = theBall.transform.localScale;
	targetScale = theBall.transform.localScale;
}



function Grow() {
	if (state != State.Growing) {
		time = 0;
		initialScale = theBall.transform.localScale;
		targetScale = Vector3(7.0, 7.0, 7.0);
		state = State.Growing;
	}
}

function Shrink() {
	if (state != State.Shrinking) {
		time = 0;
		initialScale = theBall.transform.localScale;
		targetScale = Vector3(1.5, 1.5, 1.5);
		state = State.Shrinking;
	}
}

function Restore() {
	if (state != State.Restoring) {
		time = 0;
		initialScale = theBall.transform.localScale;
		targetScale = Vector3(2.5, 2.5, 2.5);
		state = State.Restoring;
	}
}

function Hover (activate: boolean) {
	if (activate) {
		hover = 1.5;
	} else {
		hover = 0.0;
	}
}

function Braking (activate: boolean) {
	if (activate) {
		theBall.rigidbody.angularDrag = brakeAmount;
	} else {
		theBall.rigidbody.angularDrag = 0.0;
	}
}

function Boost (activate: boolean) {
	if (activate) {
		speed = 2;
	} else {
		speed = 1;
	}
}

function Selected(selected: boolean) {
	enabled = selected;
}

function Update () {

	time += Time.deltaTime;
	if (time > 1.0) {
		time = 1.0;
	}
	
	theBall.transform.localScale = Vector3.Lerp(initialScale, targetScale, time);
	
	theBall.AddForce(-Physics.gravity * hover * theBall.mass);
	

	var force: float = Input.GetAxis("Vertical");
	if (force > 0 && theBall.rigidbody.angularDrag == 0.0) { 
		
		theBall.AddForce(force * transform.forward * speed);
	}
	
 	if (Input.GetAxis("Vertical") < 0.0) {
	
		if (!back) {
		
			transform.Rotate( 0, 180, 0 );
			back = true;
		}
	} else {

		back = false;
		if (Input.GetAxis("Horizontal") > 0.0) {

			if (!right) {	
				transform.Rotate( 0, 90, 0 );
				right = true;
			}
		} else {

			right = false;
		}
		
		if (Input.GetAxis("Horizontal") < 0.0) {
			
			if (!left) {
			
				transform.Rotate( 0, -90, 0 );
				left = true;
			}
		} else {
			
			left = false;
		}
	}
	
	

	if (Input.GetButtonDown("Jump")) {
		
		var hit : RaycastHit;
		if (Physics.Raycast(theBall.transform.position, Physics.gravity.normalized, hit)) {
			var distanceToGround = hit.distance;
			if (distanceToGround < theBall.transform.localScale.y * 0.5) {
			
				theBall.AddForce(jumpForce * transform.up);
			}
		}		
	}
}

function LookUp() {

	transform.rotation = Quaternion.LookRotation(transform.up, -Physics.gravity.normalized);
}
