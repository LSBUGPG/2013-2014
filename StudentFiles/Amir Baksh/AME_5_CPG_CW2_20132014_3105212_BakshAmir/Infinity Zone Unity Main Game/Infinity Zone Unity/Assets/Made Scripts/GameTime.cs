using UnityEngine;
using System.Collections;

public class GameTime : MonoBehaviour {
	
	public enum TimeOfDay {
		Idle,
		SunRise,
		SunSet
		
	}
	
	public Transform [] sun;
	public float dayCycleInMinutes = 1;
	
	public float sunRise; 
	public float sunSet;
	public float SkyboxBlendModifier; 
	
	public Color ambLightMax;
	public Color ambLightMin;
	
	private Sun[] _sunScript;
	private float _degreeRotation;
	private float _timeOfDay;
	
	private float _dayCycleInSeconds;

	private const float SECOND = 1;
	private const float MINUTE = 60 * SECOND;
	private const float HOUR = 60 * MINUTE;
	private const float DAY = 24 * HOUR;
	private const float DEGREES_PER_SECOND = 360 / DAY;
	
	private TimeOfDay _tod;
	private float _noonTime; 
	private float _morningLength;
	private float _eveningLength;
	
	
	// Use this for initialization
	void Start () {
		_tod = TimeOfDay.Idle;
		
		_dayCycleInSeconds = dayCycleInMinutes * MINUTE; 
		
		RenderSettings.skybox.SetFloat("_Blend",0);
		
		_sunScript = new Sun[sun.Length]; 
		
		for(int cnt = 0; cnt < sun.Length; cnt++){
			Sun temp = sun[cnt]. GetComponent<Sun>();
			
			if(temp == null) {
				Debug.LogWarning("Sun script not found. Adding it.");
				sun[cnt].gameObject.AddComponent<Sun>();
				temp = sun[cnt]. GetComponent<Sun>();
				
			}
			_sunScript[cnt] = temp;
			
		}
		
		_timeOfDay = 0;
		_degreeRotation = DEGREES_PER_SECOND * DAY / (_dayCycleInSeconds);
		
		
		sunRise *=_dayCycleInSeconds;
		sunSet *= _dayCycleInSeconds;
		_noonTime = _dayCycleInSeconds / 2;
		_morningLength = _noonTime - sunRise;
		_eveningLength = sunRise - _noonTime;
		
		
		//setup lighting to minLight values to start
		SetupLighting();
	
	}
	
	// Update is called once per frame
	void Update () {
		//update the time of day
		_timeOfDay += Time.deltaTime;
		
		if(_timeOfDay > _dayCycleInSeconds)
			_timeOfDay -= _dayCycleInSeconds;
		
//		Debug.Log(_timeOfDay); 
		
		for (int cnt = 0; cnt < sun.Length; cnt++) 
		sun[cnt].Rotate(new Vector3(_degreeRotation, 0, 0) * Time.deltaTime); 
		
		if(_timeOfDay > sunRise && _timeOfDay < _noonTime){
			AdjustLighting(true);  
		}
		else if(_timeOfDay > _noonTime && _timeOfDay < sunSet){
			AdjustLighting(false);
		}
	
		if(_timeOfDay > sunRise && _timeOfDay < sunSet && RenderSettings.skybox.GetFloat("_Blend")< 1) {
			_tod = GameTime.TimeOfDay.SunRise;
			BlendSkyBox();
		}
		else if (_timeOfDay > sunSet && RenderSettings.skybox.GetFloat("_Blend")>0){
			_tod = GameTime.TimeOfDay.SunSet;
			BlendSkyBox();
		}
		else {
			_tod = GameTime.TimeOfDay.Idle;
		}
		
	}
	
	private void BlendSkyBox() {
		float temp = 0;
		
		switch(_tod){
		case TimeOfDay.SunRise:
			temp = (_timeOfDay - sunRise) / _dayCycleInSeconds * SkyboxBlendModifier;
			break;
		case TimeOfDay.SunSet:
			temp = (_timeOfDay - sunSet) / _dayCycleInSeconds * SkyboxBlendModifier;
			temp = 1 - temp; 
			break;
		}
		
		//Debug.Log(temp);
		RenderSettings.skybox.SetFloat("_Blend",temp);
	}
	
	private void SetupLighting(){
		RenderSettings.ambientLight = ambLightMin;
		
		for(int cnt = 0; cnt < _sunScript.Length; cnt++) {
			if(_sunScript[cnt].giveLight) {
				sun[cnt].GetComponent<Light>().intensity = _sunScript[cnt].minLightBrightness;
			}
		}
	}
	
	private void AdjustLighting(bool brighten){
		float pos = 0;
		
		if(brighten){
			pos = (_timeOfDay - sunRise) / _morningLength;	
		}
		else{
			pos = (sunSet-_timeOfDay) / _eveningLength;
		}
//		Debug.Log(pos);
		RenderSettings.ambientLight = new Color(ambLightMin.r + ambLightMax.r * pos,
												ambLightMin.g + ambLightMax.g * pos,
												ambLightMin.b + ambLightMax.b * pos);
//		Debug.Log(RenderSettings.ambientLight);
		for(int cnt =0; cnt < _sunScript.Length; cnt++){
			if(_sunScript[cnt].giveLight){
				_sunScript[cnt].GetComponent<Light>().intensity = _sunScript[cnt].maxLightBrightness * pos;
			}
		} 
	}
}
