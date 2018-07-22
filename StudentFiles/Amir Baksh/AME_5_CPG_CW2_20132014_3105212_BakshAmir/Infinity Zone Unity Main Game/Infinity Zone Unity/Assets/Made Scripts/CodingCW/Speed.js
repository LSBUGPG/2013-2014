#pragma strict

var Maximum: float = 100;
var Boost: float = 0;
var drainRate: float = 10;
var refillRate: float = 5;
var Boosting: boolean = false;
var Braking: boolean = false;
var BoostGUI: Transform; 

function Start () {

	Boost = Maximum;
	Boosting = false;
	Braking = false;
}

function Selected(selected: boolean) {
	enabled = selected;
}

function Update () {

	if (!Boosting && Input.GetButton("Power1") && Boost > 10) {
		Boosting = true;
	} else if (Boosting && (!Input.GetButton("Power1") || Boost <= 0.0)) {
		Boosting = false;
	}
	
	Braking = Input.GetButton("Power2");
	
	SendMessage("Braking", Braking);
	
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