#pragma strict

var texture: Texture2D;
var steps: int = 10;

var currentX: int = 0;
var currentY: int = 0;
var iterations: int = 1000;
var zoom: float = 1;
var offset: Vector2 = Vector2(-0.707, 0.28);

function Start () {

	texture = new Texture2D(128, 128);
	var sprite: Sprite = Sprite.Create(texture, Rect(0, 0, 128, 128), Vector2(0.5, 0.5), 100);
	
	var spriteRenderer: SpriteRenderer = renderer as SpriteRenderer;
	if (sprite && spriteRenderer) {
		spriteRenderer.sprite = sprite;
	}
}

function squareComplex(c: Vector2): Vector2 {
	return Vector2(c.x*c.x - c.y*c.y, c.x*c.y*2.0);
}

function Mandelbrot(point: Vector2): Color {

	var i: int = 0;
	var z: Vector2 = point;
	
	while (i < iterations && z.magnitude < 2.0) {
	
		z = squareComplex(z) + point;
	}
	
	if (i == iterations) {
		return Color.black;
	} else {
		return Color.Lerp(Color.blue, Color.white, i * 1.0 / iterations);
	}
}

function Update () {

	var point: Vector2 = Vector2(0.0, 0.0);

	for (var x: int = 0; x < steps; x++) {
	
		point.x = (currentX * 1.0 / texture.width - 0.5) * 2.0;
		point.y = (currentY * 1.0 / texture.height - 0.5) * 2.0;
		point = point * zoom + offset;
		texture.SetPixel(currentX, currentY, Mandelbrot(point));
		currentX++;
		if (currentX >= texture.width) {
			currentX = 0;
			currentY++;
			if (currentY >= texture.height) {
				currentY = 0;
			}
		}
	}
	texture.Apply();	
}