private var ray : Ray;
private var rayHit : RaycastHit;

function Update () 
{
if(Input.GetMouseButton(0)) // Press left mouse button to control the paddle https://docs.unity3d.com/Documentation/ScriptReference/Input.GetMouseButton.html
{
ray = Camera.main.ScreenPointToRay (Input.mousePosition); // http://docs.unity3d.com/Documentation/ScriptReference/Camera.ScreenPointToRay.html
if (Physics.Raycast (ray, rayHit)) // http://docs.unity3d.com/Documentation/ScriptReference/Physics.Raycast.html
{
transform.position.x = rayHit.point.x; // and move the paddle only on X axys https://docs.unity3d.com/Documentation/ScriptReference/Transform-position.html
}
}
}