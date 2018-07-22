﻿using UnityEngine;
using System.Collections;

[AddComponentMenu("Environments/Sun")]

public class Sun : MonoBehaviour {
	public float maxLightBrightness;
	public float minLightBrightness;
	
	public float maxFlareBrightness;
	public float minFlareBrightness;
	
	public bool giveLight = false;
	
	void Start() {
	if(GetComponent<Light>()!=null)
		giveLight = true; 
	}
	
	
}
