#pragma strict
var initialColor : Color;

function Start()
{
   initialColor = renderer.material.color;
}
 
function OnMouseOver()
{
   renderer.material.color = Color.red;
}

function OnMouseDown()
{
	Application.LoadLevel ("Level_1");
	Screen.showCursor = false;
}
 
function OnMouseExit()
{
   renderer.material.color = initialColor;
}