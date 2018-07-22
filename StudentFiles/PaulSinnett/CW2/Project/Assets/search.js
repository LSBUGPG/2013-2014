#pragma strict

var cards: int [];

function Start () {

	for(var card: int in cards) {
		card = Random.Range(1, 52);
	}
	
	
	
	var lowestCard: int = cards[0];
	var lowestPosition: int = 0;
	
	for (var position: int = 1; position < cards.length; position++) {
	
		if (cards[position] < lowestCard) {
			lowestCard = cards[position];
			lowestPosition = position;
		}
	}
	
	Debug.Log("lowest card =" + lowestCard + " position = " + lowestPosition);
}

function Update () {

}