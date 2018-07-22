using UnityEngine;
using System.Collections;

public class CSharpScriptTest : MonoBehaviour {

	public Transform unityScriptObject;

	// Use this for initialization
	void Start () {
	
		unityScriptObject.SendMessage("Announce");
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void Announce () {

		Debug.Log(name + " received message!");
	}
}
