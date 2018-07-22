using UnityEngine;
using System.Collections;

//Code used to move a Unity gameObject between two defined points
//Created with help from the Unity Scripting Reference
//https://docs.unity3d.com/Documentation/ScriptReference/Vector3.Lerp.html

public class CPG_CW2_WeeklyExercise2 : MonoBehaviour
{
	//GameObject variables
	public Transform startPoint;
	public Transform endPoint;
	public Transform target;

	//Float variables
	public float speed = 1f;
	private float startTime;
	private float journeyLength;
	public float smooth = 5f;

	//On start of script
	void Start ()
	{
		startTime = Time.time;
		journeyLength = Vector3.Distance(startPoint.position, endPoint.position);
	}

	//Every update frame
	void Update ()
	{
		float distCovered = (Time.time - startTime) * speed;
		float fracJourney = distCovered / journeyLength;
		transform.position = Vector3.Lerp(startPoint.position, endPoint.position, fracJourney);
	}
}

