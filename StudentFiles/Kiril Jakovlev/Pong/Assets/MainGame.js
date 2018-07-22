var scoreText : TextMesh;
private var score : int = 0;

function Awake()  //Awake is used to initialize any variables or game state before the game starts.
{
InvokeRepeating("UpdateScore", 1, 1); // updates the score
}

function UpdateScore()
{
score += 1;
scoreText.text = "Score: " + score.ToString(); // score in increased by 1
}

function GameOver()
{
if(score > PlayerPrefs.GetInt("highScore"))
{
 PlayerPrefs.SetInt("highScore", score); // if the score is higher than previous highest score, it will be displayed. https://docs.unity3d.com/Documentation/ScriptReference/PlayerPrefs.SetInt.html
 }
 
 Application.LoadLevel("mainMenu");
 }
 