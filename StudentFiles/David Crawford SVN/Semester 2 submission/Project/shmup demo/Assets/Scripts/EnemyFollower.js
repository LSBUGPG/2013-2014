//this script currently bugs due to initialized clones of my enemies losing their target once the player is dead.
//it prints out errors only. Game function until that point works fine.


var target : Transform; //the enemy's target
var movementSpeed = 6; //move speed
var rotationSpeed = 6; //speed of turning
var range = 10.0f;

var myTransform : Transform; //current transform data of this enemy
 
 
function Start(){

     target = GameObject.FindWithTag("Player").transform; //target the player
 
}
 
function Update () {
	
	if (Vector3.Distance(transform.position, target.position) < range){

    	//rotate to look at the player
    	myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    	Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
 
    	//move towards the player
    	myTransform.position += myTransform.forward * movementSpeed * Time.deltaTime;
    

	}
}
