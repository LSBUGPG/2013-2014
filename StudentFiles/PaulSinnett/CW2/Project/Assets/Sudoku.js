﻿#pragma strict

var cells: int [];

var sudokuBackground: Texture2D;

function Start () {

	cells = [
	
		2,0,5, 0,0,7, 0,0,6,
		4,0,0, 9,6,0, 0,2,0,
		0,0,0, 0,8,0, 0,4,5,
		
		9,8,0, 0,7,4, 0,0,0,
		5,7,0, 8,0,2, 0,6,9,
		0,0,0, 6,3,0, 0,5,7,
		
		7,5,0, 0,2,0, 0,0,0,
		0,6,0, 0,5,1, 0,0,2,
		3,0,0, 4,0,0, 5,0,8
	];
	
	sudokuBackground = new Texture2D(1,1);
	sudokuBackground.SetPixel(0,0,Color.cyan);
	sudokuBackground.Apply();
	
	var testList =
	[
		TestGoodList,
		TestBadList,
		TestBadListWithA10,
		TestDoubleZero
	];
	
	for (var test in testList) {
		Debug.Log(test.Method.Name);
		if (test()) {
		
			Debug.Log("Passed");
		} else {
		
			Debug.Log("Failed");
		} 
	}
	
	Solve();
}

function GetEmptyCell(): int {

	var cell: int = -1;
	
	for (cell = 0; cell < 81; cell++) {
	
		if(cells[cell] == 0) {
		
			return cell;
		}
	}
	
	return cell;
}

function Solve(): boolean {

	var cell: int = GetEmptyCell();
	if (cell >= 0 && cell < 81) {
	
		for (var guess: int = 1; guess < 10; guess++) {
		
			cells[cell] = guess;
			var row: int = cell / 9;
			var column: int = cell % 9;
			var tileRow: int = row / 3;
			var tileColumn: int = column / 3;
			if (!HasDuplicate(GetRow(row)) && !HasDuplicate(GetColumn(column)) && !HasDuplicate(GetTile(tileRow, tileColumn))) {
				 
				 if (Solve()) {
				 
				 	return true;
				 }
			}
		}
		
		cells[cell] = 0;
		return false;

	} else {
	
		Debug.Log("Done!");
		return true;
	}
}

function TestGoodList(): boolean {

	var goodList: int [] = [1,2,3,4,5,6,7,8,9];
	var testResult: boolean = HasDuplicate(goodList) == false;
	return testResult;
}

function TestBadListWithA10(): boolean {

	var badList: int [] = [1,2,3,4,5,6,7,8,10];
	var testResult: boolean = HasDuplicate(badList) == false;
	return testResult;
}

function TestBadList(): boolean {
	var badList: int [] = [1,2,3,3,5,6,7,9,9];
	return HasDuplicate(badList) == true;
}

function TestDoubleZero(): boolean {
	var badList: int [] = [1,2,3,0,5,6,7,0,0];
	return HasDuplicate(badList) == false;
}

// TODO: add more tests...
//Debug.Log(HasDuplicate(GetRow(0)));
//Debug.Log(HasDuplicate(GetRow(1)));
//Debug.Log(HasDuplicate(GetColumn(0)));
//Debug.Log(HasDuplicate(GetColumn(1)));
//Debug.Log(HasDuplicate(GetTile(0,0)));
//Debug.Log(HasDuplicate(GetTile(1,0)));


function GetCell(column: int, row: int): int {

	var cell: int = cells[row*9+column];
	return cell;
} 

function GetCellAsString(column: int, row: int): String {

	return (GetCell(column, row) == 0)? "" : GetCell(column, row).ToString();
} 

function GetRow(rowNumber: int): int[] {

	var row: int[] = new int[9];

	for (var column: int = 0; column < 9; column++) {
	
		row[column] = GetCell(column, rowNumber);
	}
	
	return row;
}

function GetColumn(columnNumber: int): int[] {

	var column: int[] = new int[9];

	for (var row: int = 0; row < 9; row++) {
	
		column[row] = GetCell(columnNumber, row);
	}
	
	return column;
}

function GetTile(tileRow: int, tileColumn: int): int [] {

	var tile: int [] = new int [9];
	
	for (var row: int = 0; row < 3; row++) {
		
		for (var column: int = 0; column < 3; column++) {
		
			tile[row*3+column] = GetCell(tileColumn*3+column, tileRow*3+row);
		}
	}
	
	return tile;
}

function OnGUI () {

	GUI.skin.label.normal.background = sudokuBackground;
	GUI.skin.label.normal.textColor = Color.black;
	GUI.skin.label.alignment = TextAnchor.MiddleCenter;

	for (var y: int = 0; y < 9; y++) {
	
		for (var x: int = 0; x < 9; x++) {
	
			var tileX: int = x / 3;
			var tileY: int = y / 3;
			GUI.Label(Rect(50+x*50+tileX*5,y*50+tileY*5,45,45), GetCellAsString(x,y));
		}
	}
}

// this function doesn't check for 0 values
function HasDuplicate(numbers: int[]): boolean {

	var slots: int [] = [0,0,0,0,0,0,0,0,0,0];
	
	for (var number: int in numbers) {
	
		if (number > 0 && number < 10) {
		
			if (slots[number] != 0) {
			
				return true;
				
			} else {
			
				slots[number] = number;
			}
		}
	}
	
	return false;
}

function Update () {

}