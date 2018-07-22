#pragma strict

var SpawnPoint : Transform[];//variable with array to enable multiple spawn points to be added

function Start () {

}

function Update () {

}

function OnTriggerEnter (man:Collider) {//basic trigger function 
	
	if (man.collider.tag == "Player") { //if the object tagger "Player" collides with the trigger then...
	var element : int = Random.Range(0,SpawnPoint.length);//this will enable random spawn points based on the length of array
	man.transform.position = SpawnPoint[element].position;//takes information above and spawn the "Player" in that position
	
	}
	
	else {
	
	}
	
}