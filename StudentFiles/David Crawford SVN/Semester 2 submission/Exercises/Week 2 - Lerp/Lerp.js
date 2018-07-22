#pragma strict

var from: Transform;
var to: Transform;

var lerpAmount: float = 0;

function Update(){
        
        lerpAmount += Time.deltaTime;
        
        transform.position = Vector3.Lerp(from.position, to.position, Mathf.Repeat(lerpAmount, 1));
}