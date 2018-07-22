#pragma strict
var start: Transform;
var end: Transform;
var ab: float = 0;

function Start () {transform.position = start.position; 


}

function Update () { ab+=Time.deltaTime;
if (ab > 1){ 
	ab = 0;
	var temp: Vector4 = start.position; 
	start.position = end.position;
	end.position = temp; 
	}
transform.position = Vector4.Lerp (start.position,end.position,ab);  

}