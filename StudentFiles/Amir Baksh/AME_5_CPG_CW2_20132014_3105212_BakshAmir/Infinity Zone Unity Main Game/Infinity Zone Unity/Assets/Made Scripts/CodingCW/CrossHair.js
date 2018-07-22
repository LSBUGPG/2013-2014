#pragma strict

var lastMousePosition: Vector3;
var rayCastCam: Transform;

function Hide(){
	guiTexture.enabled = false;
}

function Show(){
	guiTexture.enabled = true;
}

function Start () {
	guiTexture.enabled = false;

	lastMousePosition = Input.mousePosition;
}

function Update () {
	var crosshairX: float = Input.GetAxis("CrossHairX");
	var crosshairY: float = Input.GetAxis("CrossHairY");
	
	transform.position.x = Mathf.Clamp(transform.position.x - crosshairX * Time.deltaTime, 0.0, 1.0);
	transform.position.y = Mathf.Clamp(transform.position.y + crosshairY * Time.deltaTime, 0.0, 1.0);
	
	if (Input.mousePosition != lastMousePosition) {
		
		transform.position.x = Input.mousePosition.x / Screen.width;
		transform.position.y = Input.mousePosition.y / Screen.height;
		lastMousePosition = Input.mousePosition;
	}
	
	if (Input.GetButtonDown("Power1") && guiTexture.enabled) {
	
		rayCastCam.SendMessage("RayCast", transform.position);
	}
}
