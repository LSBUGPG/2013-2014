#pragma strict

//controls how fast the shot will travel, it can also be modified in the editor and reused for enemy shots
var speed: float;

function Start(){

    rigidbody.velocity = transform.forward * speed;
    
}