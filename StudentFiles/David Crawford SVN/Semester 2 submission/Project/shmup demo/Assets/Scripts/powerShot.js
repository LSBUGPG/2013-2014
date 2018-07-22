#pragma strict

// every 5 seconds the player can shoot a large shot clearning most of the screen
// every time the shot is fired there is a brief slowdown in time for a visual effect
// prints text to game screen announcing when the shot is ready.


var shot: GameObject;
var shotSpawn: Transform;
var cooldown: float;
var cooldownText : GUIText;

var myTimer : float = 5.0;

private var nextShot: float;

function Start() {
	cooldown = 5;
	UpdateCooldown();
}


function Update () {
	if (Input.GetButton ("joystick button 1") && Time.time > nextShot) {
		if (Time.timeScale == 1.0)
			nextShot = Time.time + cooldown;
			Time.timeScale = 0.5;
			Instantiate(shot, shotSpawn.position, shotSpawn.rotation);
			myTimer = cooldown;
			cooldownText.text = "Big Shot: Charging";
			
	}else{

		Time.timeScale = 1.0;
		// Adjust fixed delta time according to timescale
		// The fixed delta time will now be 0.02 frames per real-time second
		Time.fixedDeltaTime = 0.02 * Time.timeScale;
		
	}
	
	if(myTimer > 0){
		myTimer -= Time.deltaTime;
 	}
	if(myTimer <= 0){
		Debug.Log("Ready to Fire!");
		UpdateCooldown();
	}
}

function UpdateCooldown() {
    cooldownText.text = "Big Shot: Ready";
}
