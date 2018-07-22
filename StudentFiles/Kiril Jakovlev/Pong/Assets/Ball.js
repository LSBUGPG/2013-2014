var mainGameScript : MainGame;

function Awake() //Awake is used to initialize any variables or game state before the game starts. http://docs.unity3d.com/Documentation/ScriptReference/MonoBehaviour.Awake.html
{
rigidbody.AddForce(5,5,0, ForceMode.Impulse); //Makes the ball move   http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody.AddForce.html

InvokeRepeating("IncreaseVelocity", 3, 3); // http://docs.unity3d.com/Documentation/ScriptReference/MonoBehaviour.InvokeRepeating.html
}

function Update()
{
 if(transform.position.y < -9)  // https://docs.unity3d.com/Documentation/ScriptReference/Transform-position.html
 
 mainGameScript.GameOver();   // if the ball fall below y -9, then game over
 
                                    
 }
 
 function IncreaseVelocity()
 {
 rigidbody.velocity *= 1.05;        // Speed of the ball will increase http://docs.unity3d.com/Documentation/ScriptReference/Rigidbody-velocity.html
                                   //Debug.Log("velocity: " + rigidbody.velocity);
 }
 