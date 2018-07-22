using UnityEngine;
using System.Collections;

//This script was written by me using resources from the Unity Scripting Reference
//http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.AddForce.html


//Applies a force to objects that hovers them up and down slowly, used for resource icons
public class ObjectHover : MonoBehaviour 
{
	public float hoverForce = 15f;

	void OnTriggerStay (Collider other)
	{
		other.rigidbody.AddForce (Vector3.up * hoverForce, ForceMode.Acceleration);
	}
}
