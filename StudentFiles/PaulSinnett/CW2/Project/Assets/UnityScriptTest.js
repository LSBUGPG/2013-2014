#pragma strict

public var cSharpScriptedObject: Transform;

function Start () {

	cSharpScriptedObject.SendMessage("Announce");
}

function Update () {

}

function Announce () {

	Debug.Log(name + " recieved a message");
}