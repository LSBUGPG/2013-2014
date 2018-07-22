#pragma strict

// once an object leaves the trigger, destroy it.
function OnTriggerExit(other : Collider){

    Destroy(other.gameObject);

}