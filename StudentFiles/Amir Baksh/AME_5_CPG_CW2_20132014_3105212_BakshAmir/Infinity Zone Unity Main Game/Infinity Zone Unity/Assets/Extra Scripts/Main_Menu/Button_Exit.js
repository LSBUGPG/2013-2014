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
	Application.Quit();
}
 
function OnMouseExit()
{
   renderer.material.color = initialColor;
}