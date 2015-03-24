var game = {

};
var rowOne = [];
var rowTwo =[];
var rowThree = [];
var rowFour = [];
var rowFive = [];
var rowSix = [];
var rowSeven = [];
var rowEight = [];
var rowNine = [];
var rowTen = [];

var board = {};

var arr = [];

function cell (display, isAlive, nextIt){
	this.display = display;
	this.isAlive = isAlive;
	this.nextIt = nextIt;
	this.checkStatus = function(){
		if (this.isAlive){
			this.display = "0";
		} else {
			this.displayu = "-";
		}
	}
}

for (var i = 0; i < 200; i++){
	game[i] = new cell("-", false, false);
}

rowOne = createRow(0);
rowTwo = createRow(1);
rowThree = createRow(2);
rowFour = createRow(3);
rowFive = createRow(4);
rowSix = createRow(5);
rowSeven = createRow(6);
rowEight = createRow(7);
rowNine = createRow(8);
rowTen = createRow(9);

function printBoard(){
	console.log(rowOne.join(''));
	console.log(rowTwo.join(''));
	console.log(rowThree.join(''));
	console.log(rowFour.join(''));
	console.log(rowFive.join(''));
	console.log(rowSix.join(''));
	console.log(rowSeven.join(''));
	console.log(rowEight.join(''));
	console.log(rowNine.join(''));
	console.log(rowTen.join(''));
}

function createRow(rowNum){
	var tempArray = [];
	for (cell in game){
		if (cell >= rowNum * 20 && cell < rowNum * 20 + 20){
			tempArray.push(game[cell].display);
		}
	}
	return tempArray
}

console.log(rowOne.join(''));

var tempArray1 = [];

for (cell in game){
	var tempArray1 = [];
	var alive = 0;
	tempArray1.push(game[cell + 20], game[cell-20], game[cell + 1], game[cell - 1], game[cell - 19], game[cell + 19], game[cell - 21], game[cell + 21]);
	console.log(tempArray1);
	tempArray1.forEach(function(item){
		if (tempArray1[item].isAlive === true)
			alive += 1;
	})
	if(game[cell].isAlive === true && (alive < 2 || alive > 3)) {
	game[cell].isAlive = false;
	} else if (game[cell].isAlive == false && alive === 3) {
		game[cell].isAlive = true;
	}
}

printBoard();

for (cell in game){
	game[cell].checkStatus();
}

rowOne = createRow(0);
rowTwo = createRow(1);
rowThree = createRow(2);
rowFour = createRow(3);
rowFive = createRow(4);
rowSix = createRow(5);
rowSeven = createRow(6);
rowEight = createRow(7);
rowNine = createRow(8);
rowTen = createRow(9);

printBoard();



