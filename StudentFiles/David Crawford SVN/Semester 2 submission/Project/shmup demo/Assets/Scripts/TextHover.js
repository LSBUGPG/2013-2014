#pragma strict
var sizeSel = Rect (0,0,Screen.width,Screen.height);
var sizeUnsel = Rect (0,0,Screen.width,Screen.height);

function Update () {

	var screenPos : Vector2 = Input.mousePosition;
	var guiRectangle : Rect = guiTexture.GetScreenRect ();

	if (guiRectangle.Contains( screenPos )){
		guiTexture.pixelInset = sizeSel;
	 
		if(Input.GetMouseButtonDown(0));
	}else{
		guiTexture.pixelInset = sizeUnsel;	
	}
}