#pragma strict

var lines: line[];

function Start () {

}

function Update () {

	if (lines.length > 1 && lines[0].points.length > 1 && lines[1].points.length > 1) {
	
		var a1: float = lines[0].points[1].position.y - lines[0].points[0].position.y;
		var b1: float = lines[0].points[0].position.x - lines[0].points[1].position.x;
		var c1: float = a1*lines[0].points[0].position.x + b1*lines[0].points[1].position.x;

		var a2: float = lines[1].points[1].position.y - lines[1].points[0].position.y;
		var b2: float = lines[1].points[0].position.x - lines[1].points[1].position.x;
		var c2: float = a2*lines[1].points[0].position.x + b2*lines[1].points[1].position.x;
		
 		var det: float = a1*b2 - a2*b1;
	    if (Mathf.Approximately(det, 0)) {
	        //Lines are parallel
	    } else {
	        transform.position.x = (b2*c1 - b1*c2)/det;
	        transform.position.y = (a1*c2 - a2*c1)/det;
	    }		
	}
}