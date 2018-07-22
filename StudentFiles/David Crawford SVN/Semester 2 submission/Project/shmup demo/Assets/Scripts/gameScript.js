#pragma strict

// this script controls the status of the game.
// this script controls random spawning as well as score, restart and gameover states
// it manages waves and spawns at set timers by taking pauses for a few seconds.

var asteroid: GameObject;
var spawnLocations: Vector3;
var asteroidCount: int;

var spawnTimer: float;
var startTimer: float;
var waveTimer: float;


var scoreText : GUIText;
var restartText : GUIText;
var gameOverText : GUIText;

private  var score : int;
private  var gameOver : boolean;
private  var restart : boolean;



function Start(){

	SpawnWaves ();
    score = 0;
    UpdateScore ();
    gameOver = false;
    restart = false;
    restartText.text = "";
    gameOverText.text = "";  
    
}

function Update () {
    
    if (restart){
    
        if (Input.GetKeyDown (KeyCode.R) || Input.GetButton("joystick button 1")){
        
            Application.LoadLevel (Application.loadedLevel);
            
        }
    }
}

function AddScore (newScoreValue: int) {
   
    score += newScoreValue;
    UpdateScore();
    
}

function UpdateScore() {
    scoreText.text = "Score: " + score;
}

function SpawnWaves(){
    yield WaitForSeconds (startTimer); //time before first wave
    while (true){ // start an infinite loop
    
        for ( var j: int= 0; j < asteroidCount; j++){
        
        	//random location
            var asteroidPosition : Vector3= new Vector3 (Random.Range (-spawnLocations.x, spawnLocations.x), spawnLocations.y, spawnLocations.z);
            var asteroidRotation : Quaternion= Quaternion.identity; //random rotation
            Instantiate (asteroid, asteroidPosition, asteroidRotation); //spawn clones
            yield WaitForSeconds (spawnTimer);//time between each spawn
        }
        yield WaitForSeconds (waveTimer);//time between waves
        
        if (gameOver){
 
            restartText.text = "Press 'R' or 'B' on a controller to Restart";
            restart = true;
            SendMessage("GameOverPause");
            break;
        }
    }
}

function GameOver () {

    gameOverText.text = "Game Over";
    gameOver = true;
    
    
}
