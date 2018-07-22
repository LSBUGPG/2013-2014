#pragma strict
public var customGuiStyle : GUIStyle;
private var textArea = new Rect(Screen.width/2 - 225, Screen.height/2 + 100, 450,50);
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
	GUI.Box (textArea, "Checkpoint",customGuiStyle );
	}
}