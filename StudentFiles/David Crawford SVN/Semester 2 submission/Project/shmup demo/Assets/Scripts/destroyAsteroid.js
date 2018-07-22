#pragma strict

var explosion: GameObject;
var scoreValue : int;
private var controller: gameScript;

function Start (){

    var gameScriptObject: GameObject = GameObject.FindWithTag ("GameController");
   
    if (gameScriptObject != null){
    
        controller = gameScriptObject.GetComponent (gameScript);
    
    }
}

function OnTriggerEnter(other : Collider){

    if (other.tag == "bounds" ){
    
    	return;
    
    }
   
     //spawn animation
    Instantiate(explosion, transform.position, transform.rotation);
    
    if (other.tag == "Player"){
    
        Instantiate(explosion, other.transform.position, other.transform.rotation);
        controller.GameOver ();
        Destroy(other.gameObject);
        Destroy(gameObject);
    
    }
    
    if (other.tag == "shot" ){
    
        //add to score
    	controller.AddScore (scoreValue);
   		//destroy the objects that collided 
        Destroy(gameObject);
        Destroy(other.gameObject);
    
    }
    if (other.tag == "BigShot" ){
    
        //add to score
    	controller.AddScore (scoreValue);
   		//destroy the objects that collided 
        
        Destroy(other.gameObject);
    
    }
    
    Destroy(gameObject);
    controller.AddScore (scoreValue);
 
}
