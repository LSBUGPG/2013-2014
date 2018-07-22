#pragma strict

var dictionary: TextAsset;
var theWord: String;
private var words: String [];

function Start () {
	words = dictionary.text.Split("\n"[0]);
}

function isBetween(word: String, start: int, end: int): boolean {
	var found: boolean = false;
	if (start < end) {
		var middle: int = start + (end - start) / 2;
		Debug.Log (words[middle]);
		var comparison: int = String.CompareOrdinal(word, words[middle]);
		if (comparison == 0) {
			found = true;
		} else if (comparison < 0) {
			found = isBetween(word, start, middle);
		} else {
			found = isBetween(word, middle+1, end);
		}
	}
	return found;
}

function isInDictionary (word: String): boolean {
	return isBetween(word, 0, words.Length);
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Space)) {
		Debug.Log(words[Random.Range(0,words.length)]);
	}

	if (Input.GetKeyDown(KeyCode.C)) {
		if (isInDictionary(theWord)) {
			Debug.Log(theWord + " is in the dictionary!");
		} else {
			Debug.Log(theWord + " is not in the dictionary!");
		}
	}
}