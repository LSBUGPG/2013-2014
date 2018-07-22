
// Code is from http://answers.unity3d.com/questions/266592/implement-the-equation-as-a-code.html \\


var Speed = 1.0;
var Amplitude = 1.0;
var Waypoints : Vector3[];
 
private var WaveLength : float;
private var i = 0;
private var TargetPos : Vector3;
private var StartPos : Vector3;
private var Line1;
private var Grad1 : float;
private var Grad2 : float;
private var k1 : float;
private var k2 : float;
private var MaxDist : float;
private var MedianPos : Vector3;
 
function Start () {
    NextWaypoint();
}
 
function Update () {
    var MedianXPos : float;
    var MedianZPos : float;
    var CurDist : float;
    var Offset : Vector3;
 
    if(Grad1 == 0){
       MedianXPos = transform.position.x;
       MedianZPos = k1;
       CurDist = Vector3.Distance(Vector3(TargetPos.x, 0, TargetPos.z), Vector3(MedianXPos, 0, MedianZPos));
       Offset = Vector3(transform.position.x - MedianXPos, 0, transform.position.z - MedianZPos);
    }else if(Mathf.Abs(Grad1) == Mathf.Infinity){
       MedianXPos = StartPos.x;
       MedianZPos = transform.position.z;
       CurDist = Vector3.Distance(Vector3(TargetPos.x, 0, TargetPos.z), Vector3(MedianXPos, 0, MedianZPos));
       Offset = Vector3(transform.position.x - MedianXPos, 0, transform.position.z - MedianZPos);
    }else{
       k2 = transform.position.z - (Grad2 * transform.position.x);
       MedianXPos = (k1-k2)/(Grad2-Grad1);
       MedianZPos = Grad1*MedianXPos + k1;
       CurDist = Vector3.Distance(Vector3(TargetPos.x, 0, TargetPos.z), Vector3(MedianXPos, 0, MedianZPos));
       Offset = Vector3(transform.position.x - MedianXPos, 0, transform.position.z - MedianZPos);
    }
 
    MedianPos = Vector3(Mathf.MoveTowards(MedianXPos, TargetPos.x, Speed * Time.deltaTime), MedianPos.y, Mathf.MoveTowards(MedianZPos, TargetPos.z, Speed * Time.deltaTime));
 
    var SinOffset : Vector3;
    if(Grad1 == 0){
       SinOffset = Vector3(0, 0, Mathf.Sin(CurDist*WaveLength));
    }else if(Mathf.Abs(Grad1) == Mathf.Infinity){
       SinOffset = Vector3(Mathf.Sin(CurDist*WaveLength), 0, 0);
    }else{
       SinOffset = Vector3(Mathf.Sin(CurDist*WaveLength), 0, Grad2*Mathf.Sin(CurDist*WaveLength));
    }
 
    transform.position = Vector3(MedianPos.x + (SinOffset.x*Amplitude), transform.position.y, MedianPos.z + (SinOffset.z*Amplitude));
 
    Debug.DrawLine (Vector3(MedianXPos, 0, MedianZPos) + Offset, TargetPos+Offset, Color.red);
 
    if(TargetPos.x == transform.position.x && TargetPos.z == transform.position.z){
       if(i < (Waypoints.Length - 1)){
         i++;
         StartCoroutine("NextWaypoint");
       }else{
         Debug.Log("Journey finished");
       }
    }
}
 
function NextWaypoint () {
    TargetPos = Waypoints[i];
 
    StartPos = transform.position;
    MedianPos = transform.position;
 
    Line1 = Vector3(TargetPos.x - StartPos.x, 0, TargetPos.z - StartPos.z);
    Grad1 = Line1.z/Line1.x;
    k1 = StartPos.z - (Grad1 * StartPos.x);
 
    if(Grad1 == 0){
       Grad2 = (-1.0)/Grad1;
    }else if(Mathf.Abs(Grad1) == Mathf.Infinity){
       Grad2 = 0;
    }else{
       Grad2 = (-1.0)/Grad1;
    }
    k2 = StartPos.z - (Grad2 * StartPos.x);
 
    MaxDist = Vector3.Distance(Vector3(TargetPos.x, 0, TargetPos.z), Vector3(StartPos.x, 0, StartPos.z));
    WaveLength = (2 * Mathf.PI)/MaxDist;
    StopCoroutine("NextWaypoint");
    
    	}
    