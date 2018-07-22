#pragma strict

	var player : GameObject [];
 	var playerInput: BallController [];
 	var crossHair: Transform; 

    var activePlayer: int = 0;
 
    var cameraPlayer : GameObject [];
 
    function Start(){
    }
 
 
 
    function LateUpdate(){
        if(Input.GetButtonDown("Camera1"))  {
           activePlayer = 0;
           crossHair.SendMessage("Hide");
        }
 
    if(Input.GetButtonDown("Camera2"))  {
           activePlayer = 1;
           crossHair.SendMessage("Hide");
    }
    
    if(Input.GetButtonDown("Camera3")) {
           activePlayer = 2;
           crossHair.SendMessage("Show");
    	}
 
    for (var i = 0; i < playerInput.length; i++) {
    	playerInput[i].SendMessage( "Selected", (activePlayer == i));
    }
 
    transform.position = cameraPlayer[activePlayer].transform.position; //Consider lerping 
    transform.rotation = cameraPlayer[activePlayer].transform.rotation; //Consider lerping 
}
