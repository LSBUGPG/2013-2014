#pragma strict

// this script controls the status of the game.
// it spawns stuff at a random set location with set intervals

var follower: GameObject;
var spawnLocations: Vector3;
var followerCount: int;
var maxCount: int;

var spawnTimer: float;
var startTimer: float;
var waveTimer: float;

private  var gameOver : boolean;
private  var reset : boolean;


function Start(){

	SpawnWaves ();
	gameOver = false;
	reset = false;
    
}

function SpawnWaves(){
    yield WaitForSeconds (startTimer); //time before first wave
    while (true){ // start an infinite loop
    
        for ( var j: int= 0; j < followerCount; j++){
        
        	//random location
            var followerPosition : Vector3= new Vector3 (Random.Range (-spawnLocations.x, spawnLocations.x), spawnLocations.y, spawnLocations.z);
            var followerRotation : Quaternion= Quaternion.identity; //random rotation
            Instantiate (follower, followerPosition, followerRotation); //spawn clones
            yield WaitForSeconds (spawnTimer);//time between each spawn
        }
        yield WaitForSeconds (waveTimer);//time between wave
        
        if (gameOver){
            reset = true;   
            break;
		}
	}
}

function GameOver () {

    gameOver = true;
    
}