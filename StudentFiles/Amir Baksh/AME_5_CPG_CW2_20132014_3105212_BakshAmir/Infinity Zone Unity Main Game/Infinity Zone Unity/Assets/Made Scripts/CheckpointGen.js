#pragma strict
function OnTriggerEnter (other : Collider){
other.SendMessage ("SetCheckpoint",transform);
} 

function Start () { 

}

function Update () {

}