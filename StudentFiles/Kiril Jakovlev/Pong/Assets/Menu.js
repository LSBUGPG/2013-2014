private var ray : Ray;
private var rayHit : RaycastHit;

var highScore : TextMesh;

function Awake()  //Awake is used to initialize any variables or game state before the game starts.
{
highScore.text = "High score: " + PlayerPrefs.GetInt("highScore").ToString();
}

function Update()
{

if(Input.GetMouseButtonDown(0)) //when you press left mouse button. 0 means left button
{
ray = Camera.main.ScreenPointToRay (Input.mousePosition);
if (Physics.Raycast (ray, rayHit))
{
if(rayHit.transform.name == "playB")//if player presses Play button, then it loads the game
{
Application.LoadLevel("pong"); // this is the code which loads the game
}
}
}
}