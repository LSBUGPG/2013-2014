#pragma strict
var initialColor : Color;

function Start() 
{
  initialColor = renderer.material.color;
}

function OnMouseOver() 
{
  renderer.material.color = Color.blue;
}

function OnMouseDown()
{
	Application.LoadLevel ("Aidens Nightmare");
	Screen.showCursor = true;
}

function OnMouseExit()
{
	renderer.material.color = initialColor;
	}