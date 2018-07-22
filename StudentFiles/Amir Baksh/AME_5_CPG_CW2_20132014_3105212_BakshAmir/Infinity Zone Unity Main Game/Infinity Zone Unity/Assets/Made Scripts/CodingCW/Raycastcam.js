// pragma below is needed due to a UnityJS issue
#pragma strict

var Maximum: float = 100;
var Boost: float = 0;
var drainRate: float = 10;
var refillRate: float = 5;
var Boosting: boolean = false;
var BoostGUI: Transform;

var ballController: Transform;
public var gravityPos:Vector3;

function Start () {

	Boost = Maximum;
	Boosting = false;
}

function Selected(selected: boolean) {
	enabled = selected;
}

function RayCast(crosshair: Vector3) {

	crosshair.x *= Screen.width;
	crosshair.y *= Screen.height;
	
    var ray : Ray = Camera.main.ScreenPointToRay (crosshair);
    var hit : RaycastHit;
    if (Physics.Raycast (ray, hit, 500.0)) {
    
    	Physics.gravity = -hit.normal * Physics.gravity.magnitude;
    	Camera.main.SendMessage( "LookUp" ); 
    	ballController.SendMessage( "LookUp" ); 
    	gravityPos = -hit.normal;
    }	
}

function Update(){
    
	if (!Boosting && Input.GetButton("Power2") && Boost > 10) {
		Boosting = true;
	} else if (Boosting && (!Input.GetButton("Power2") || Boost <= 0.0)) {
		Boosting = false;
	}

   	SendMessage ("Hover", Boosting);

	if (Boosting) {
		SendMessage("Boost", true);
		Boost -= Time.deltaTime * drainRate;
	} else {
		SendMessage("Boost", false);
		Boost += Time.deltaTime * refillRate;
		if (Boost > 100) {
			Boost = 100;
		}	
	}


	BoostGUI.guiText.text = Mathf.RoundToInt(Boost).ToString();    
}
