#pragma strict

var speed: float = 5.0;

function Start () {

}

function Update () {

	var sprite: SpriteRenderer = renderer as SpriteRenderer;
	if (sprite) {
	
		sprite.color.a = Mathf.Sin(Time.time * speed) * 0.5 + 0.5;
	}
}