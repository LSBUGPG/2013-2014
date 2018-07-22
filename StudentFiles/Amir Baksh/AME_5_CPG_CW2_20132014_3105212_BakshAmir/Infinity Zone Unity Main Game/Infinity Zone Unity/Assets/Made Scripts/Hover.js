#pragma strict
var fontsizeselected : int = 50;
var fontsizeunselected : int = 40;

function Start () {

}

function Update () {
var screenPos : Vector2 = Input.mousePosition;
//screenPos.y = Screen.height - screenPos.y;
var guiRectangle : Rect = guiText.GetScreenRect ();
//Debug.Log ( "Mouse position = " + screenPos );
if (guiRectangle.Contains( screenPos )) 
{
	guiText.fontSize = fontsizeselected;
	Debug.Log ("Hover" );
	if(Input.GetMouseButtonDown(0)) SendMessage ("onClick");
}
else
{
    guiText.fontSize = fontsizeunselected;
	Debug.Log ("not Hover" );
}
}