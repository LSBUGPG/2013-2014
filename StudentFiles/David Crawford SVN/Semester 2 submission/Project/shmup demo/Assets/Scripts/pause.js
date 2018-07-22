#pragma strict

// this was one of the pause scripts i was working on.
// it was with this that I learnt how to slow down ingame time for the powerShot script
// Time.timeScale works on time.deltatime and due to that it is currently causing a few bugs in the game
// the game can only be paused once the player is dead.

var gamePaused: boolean;

function Start (){

	gamePaused = false;

}

    
function GameOverPause() {
		Time.timeScale = 0;
}

function Update() {

	if (gamePaused == false && Input.GetButtonDown("joystick button 7") || Input.GetKeyDown(KeyCode.Escape)) {
    
		Time.timeScale = 0;
		gamePaused = true;
	}
	
	if (gamePaused == true && Input.GetButton("joystick button 7") || Input.GetKeyDown(KeyCode.Escape)) {
    
		Time.timeScale = 1;
		gamePaused = false;
	}
}