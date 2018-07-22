#pragma strict

var cells: int []; 

var sudokuBackground: Texture2D;

function Start () {

cells = [
	
	0,6,3,	0,0,9,	1,0,0,	
	0,0,2,	0,5,8,	3,0,0,
	8,0,0,	0,0,0,	0,7,6,
	4,0,0,	0,0,0,	6,3,0,	
	6,2,0,	0,0,0,	0,5,9,
	0,9,7,	0,0,0,	0,0,2,
	2,1,0,	0,0,0,	0,0,2,
	0,0,6,	1,7,0,	4,0,0,
	0,0,5,	9,0,0,	2,1,0
	
	
	];
	
	
	sudokuBackground = new Texture2D(1,1);
	sudokuBackground.SetPixel(0,0,Color.cyan);
	sudokuBackground.Apply();
	
	var goodList: int [] = [1,2,3,4,5,6,7,8,9];
	var badList: int [] = [1,2,3,4,5,6,7,8,9];
	Debug.Log(HasDuplicate(goodList)); 
	Debug.Log(HasDuplicate(badList));
}

function GetCell(column: int, row: int):String {

	var cell: int = cells[row*9+column];
	
	return(cell == 0)? "" : cell.ToString();
}

function GetRow(rowNumber: int): int []{
	
	for(var column: int = 0; column < 9; column++){
	
		row[column] = cells[rowNumber*9+column];
	}
	
	return row;

}

function GetColumn(columnNumber: int): int []{
	
	for(var column: int = 0; column < 9; column++){
	
		coloumn[row] = cells[rowNumber*9+column];
	}
	
	return column;

}





function OnGUI () {

	GUI.skin.label.normal.background = sudokuBackground;
	GUI.skin.label.alignment = TextAnchor.MiddleCenter;
	GUI.skin.label.normal.textColor = Color.red;

	for (var y:int = 0; y < 9; y++) {
	
		for (var x: int = 0; x < 9; x++) {
	
		GUI.Label(Rect(50+ x*50,y*50,45,45), GetCell(x,y));
	
	
		}
	}
}

//this function doesn't check for 0 values
function HasDuplicate(numbers: int []): boolean {

	var slots: int [] = [0,0,0,0,0,0,0,0,0,0];
	
	for (var number: int in numbers){
	
		if(slots[number-1] !=0 ){
			return true;
			
			}else{
			
				slots[number-1] = number;
		}
	}
	
	return false;
}
