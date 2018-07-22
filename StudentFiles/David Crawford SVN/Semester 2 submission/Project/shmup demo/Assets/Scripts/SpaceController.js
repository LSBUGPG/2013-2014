#pragma strict

//Controls the spaceship and the fire rate as well as the boundry that it is set to.

var shot: GameObject;
var shotSpawn: Transform;
var shotRate: float;

private var nextShot: float;

var speed: float;
var tilt: float;
var boundary: Boundary;

private var axisInput: float;

class Boundary {

    var left: float;
    var right: float;
    var bottom: float;
    var top: float;
    
}

function Update () {

	getAxis();
	//spawn bullets and control how fast you can shoot
    if (Input.GetButton("Fire1") && Time.time > nextShot){
    
        nextShot = Time.time + shotRate;
        Instantiate(shot, shotSpawn.position, shotSpawn.rotation);
    
    }

}

function FixedUpdate() {

	//set through unity settings
    var moveHorizontal: float= Input.GetAxis ("Horizontal"); 
    var moveVertical: float= Input.GetAxis ("Vertical");
	//disable the Y axis 
    var move: Vector3= new Vector3 (moveHorizontal, 0.0f, moveVertical);
    
    rigidbody.velocity = move * speed;
	//bind the player to the screen. Needs to be reworked for alternating screen sizes
	rigidbody.position = new Vector3(Mathf.Clamp (rigidbody.position.x, boundary.left, boundary.right),0.0f,Mathf.Clamp (rigidbody.position.z, boundary.bottom, boundary.top));
	//make the ship tilt when in moves( it's beautiful :D )
    rigidbody.rotation = Quaternion.Euler (0.0f, 0.0f, rigidbody.velocity.x * -tilt);
    
}
	
function getAxis()
	{
		if(Input.GetAxisRaw("Horizontal")> 0.3|| Input.GetAxisRaw("Horizontal") < -0.3){
		
			axisInput = Input.GetAxisRaw("Horizontal");
		
		}
		
		if(Input.GetAxisRaw("Vertical")> 0.3|| Input.GetAxisRaw("Vertical") < -0.3){
		
			axisInput = Input.GetAxisRaw("Vertical");
		
		}
	}