#pragma strict

//for this exercise I decided to look into time and slow motion.
//I then applied a timer to it to stop it being used too often.
//Finally I linked it to a game where when a super shot is fired
//it slows down time as well.

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
