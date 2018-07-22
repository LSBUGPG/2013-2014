using UnityEngine;
using System.Collections;
public class Start: MonoBehaviour {
 
void OnMouseDown(){
		
    if(Input.GetMouseButtonDown(0)){
			
    	Application.LoadLevel ("Main2");
			
		}
	}
}