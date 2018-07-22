#pragma strict

var placeA: Transform;
var placeB: Transform;
var placeC: Transform;
var placeD: Transform;
var placeE: Transform;
var placeF: Transform;
var placeG: Transform;
var placeH: Transform;

var platformSpeed = 1.0;

var placeCount: int = 0;


function Start () {

}

function Update () {

		if(transform.position == placeA.position) {
			placeCount = 1;
		}
		
		if(transform.position == placeB.position) {
			placeCount = 2;
		}
		
		if(transform.position == placeC.position) {
			placeCount = 3;
		}
		
		if(transform.position == placeD.position) {
			placeCount = 4;
		}
		
		if(transform.position == placeE.position) {
			placeCount = 5;
		}
		
		if(transform.position == placeF.position) {
			placeCount = 6;
		}
		if(transform.position == placeG.position) {
			placeCount = 7;
		}
		if(transform.position == placeH.position) {
			placeCount = 0;
		}
				
		if(placeCount == 0){
		
		transform.position = Vector3.MoveTowards (transform.position, placeA.position, platformSpeed);
		
		}
		
		if(placeCount == 1){
		
		transform.position = Vector3.MoveTowards (transform.position, placeB.position, platformSpeed);	
		
		}
		if(placeCount == 2){
		
		transform.position = Vector3.MoveTowards (transform.position, placeC.position, platformSpeed);	
		
		}
		
		if(placeCount == 3){
		
		transform.position = Vector3.MoveTowards (transform.position, placeD.position, platformSpeed);	
		
		}
		
		if(placeCount == 4){
		
		transform.position = Vector3.MoveTowards (transform.position, placeE.position, platformSpeed);
		
		}
		if(placeCount == 5){
		
		transform.position = Vector3.MoveTowards (transform.position, placeF.position, platformSpeed);	
		
		}
		
		if(placeCount == 6){
		
		transform.position = Vector3.MoveTowards (transform.position, placeG.position, platformSpeed);	
		
		}
		
		if(placeCount == 7){
		
		transform.position = Vector3.MoveTowards (transform.position, placeH.position, platformSpeed);	
		
		}
}