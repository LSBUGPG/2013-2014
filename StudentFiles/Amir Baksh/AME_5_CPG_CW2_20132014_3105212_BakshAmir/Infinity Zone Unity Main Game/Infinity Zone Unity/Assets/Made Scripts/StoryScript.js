#pragma strict
var textArea = new Rect(0,0,Screen.width, Screen.height);
private var drawGUI = false;
//var textFill : String = "Hello World";


function OnTriggerEnter(col: Collider)
{
    if(col.tag == "Player")
    {
    drawGUI = true;
   
    //GUI.Label(textArea,"Here is a block of text\nlalalala\nanother line\nI could do this all day!");
    }
}

function OnTriggerExit(col: Collider)
{
    if(col.tag == "Player")
    {
    drawGUI = false;
    
    
    }
}

function OnGUI ()
{
	if (drawGUI == true)
	{
	 //GUI.Label(textArea,"Here is a block of text\nlalalala\nanother line\nI could do this all day!");
	//textFill = GUI.TextField (Rect (600, 400, 300, 300), textFill, 150);
	GUI.Box (textArea, "Up Arrow Move Forward and Space Bar To Jump" );
	}
}