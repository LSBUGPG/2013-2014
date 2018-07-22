#pragma strict

var Obj : GameObject;

function Start () {

Obj.SetActive(false);

}

function OnTriggerEnter () { Obj.SetActive (true); }

function OnTriggerExit () { Obj.SetActive(false);
 }
//Displays 3D text box when player enters it.
//The purposes of the text is to display information and show the names of the object or sequence the player just entered.