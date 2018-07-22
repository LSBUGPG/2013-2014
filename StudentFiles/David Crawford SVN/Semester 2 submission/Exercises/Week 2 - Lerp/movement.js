
// Use this for initialization
var startPoint: Transform;
var endPoint: Transform;

var progress: float = 0;

//movement speed default
var speed = 1.0;

// Time when the movement started.
private var startTime: float;
		
//Get the distance
private var distTotal: float;

function Start () {

	//Distance between startPoint and endPoint object
	distTotal = Vector3.Distance(startPoint.position, endPoint.position);
	
	//Time
	startTime = Time.time;

}

// Update is called once per frame
function Update () {

	var distCovered = (Time.time - startTime) * speed;
	var progress = distCovered / distTotal;
	
	if (distCovered >= distTotal){
	
		progress = 1;
	
	}else{
	
		transform.position = startPoint.position + (endPoint.position - startPoint.position ) *  progress;
	
	}
}


