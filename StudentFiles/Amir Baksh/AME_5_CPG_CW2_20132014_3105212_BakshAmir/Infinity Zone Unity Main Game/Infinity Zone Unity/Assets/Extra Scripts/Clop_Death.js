#pragma strict

function OnTriggerEnter(collider : Collider)
{
    if(collider.gameObject.name == "Clop")
    {
    	Destroy(collider.gameObject);
    	Screen.showCursor = true;
    	Application.LoadLevel ("You_Died");
    }
   
}