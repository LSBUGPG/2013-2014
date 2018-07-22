var Speed = 1;
var Amplitude = 1;
var TargetPos : Vector3;
 
function Update () {
    transform.position.y = Mathf.Sin((Mathf.Sqrt((TargetPos.x-transform.position.x)*(TargetPos.x-transform.position.x) + (TargetPos.z-transform.position.z)*(TargetPos.z-transform.position.z)))*Speed) * Amplitude;
}
