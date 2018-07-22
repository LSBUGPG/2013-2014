#pragma strict

var Timer: float = 0.0f;
var TimerGUI: Transform; 

function Start () {

}

function Selected(selected: boolean) {
	enabled = selected;
}

function Update () {

	var grow: boolean = Input.GetButton("Power1");
	var shrink: boolean = Input.GetButton("Power2");

	if (Timer == 0.0 && (grow || shrink)) {
		Timer = 10.0;
	}
	
	Timer -= Time.deltaTime;
	if (Timer < 0.0) {
		Timer = 0.0;
		SendMessage("Restore");
	}
	
	if (Timer > 0.0) {
		if (grow) {
			SendMessage("Grow");
		} else if (shrink) {
			SendMessage("Shrink");
		}
	}
	TimerGUI.guiText.text = Mathf.RoundToInt(Timer).ToString();
}