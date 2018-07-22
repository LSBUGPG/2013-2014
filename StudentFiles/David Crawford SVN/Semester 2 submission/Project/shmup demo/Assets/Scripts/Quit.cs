using UnityEngine;
using System.Collections;
public class Quit: MonoBehaviour {

private bool exitClicked = false;
 
void OnMouseDown(){
		
    if(Input.GetMouseButtonDown(0)){
			
       exitClicked = true;
    
	}
}
//draw prompt screen GUI.
void OnGUI (){
		
    if(exitClicked == true){
			
	GUI.Label(new Rect(Screen.width/2 - 30, Screen.height/2 - 50, 100, 20), "Are You Sure?");
 	
		if (GUI.Button (new Rect (Screen.width/2 - 100,Screen.height/2,100,60), "Yes")){
       
		Application.Quit();
       
			}
 
       if (GUI.Button (new Rect (Screen.width/2 + 20,Screen.height/2,100,60), "No")){
				
       exitClicked = false;
				
	       }
	    }
	}
}