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
	this.changeStatus = function(){
		return this.isAlive = this.nextIt;
	}
	this.checkStatus = function(){
		if (this.isAlive){
			this.display = "0";
		} else {
			this.display = "-";
		}
	}
}

for (var i = 0; i < 200; i++){
	game[i] = new cell("-", false, false);
}



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

function pusher(num, array){
	if (game[Number(cell) + num] !== undefined){
		array.push(game[Number(cell)+num]);
	}
	if (game[Number(cell) - num] !== undefined){
		array.push(game[Number(cell) - num]);
	}
}




function iteration(){
	// var tempArray1 = [];
	for (cell in game){
		var tempArray1 = [];
		var alive = 0;
		pusher(20, tempArray1);
		pusher(1, tempArray1);
		pusher(19, tempArray1);
		pusher(21, tempArray1);
		// tempArray1.push(game[cell + 20], game[cell-20], game[cell + 1], game[cell - 1], game[cell - 19], game[cell + 19], game[cell - 21], game[cell + 21]);
		// console.log(tempArray1);
		tempArray1.forEach(function(item){
			if (item.isAlive === true)
				alive += 1;
			});
		if(game[cell].isAlive === true && (alive < 2 || alive > 3)) {
			game[cell].nextIt = false;
		} else if (game[cell].isAlive === false && alive === 3) {
			game[cell].nextIt = true;
		} else if (game[cell].isAlive === false){
			game[cell].nextIt = false;
		} else {
			game[cell].nextIt = true;
		}
		// console.log(alive);
	}
}

game[70].isAlive = true;
game[71].isAlive = true;
game[72].isAlive = true;
game[89].isAlive = true;
game[90].isAlive = true;
game[91].isAlive = true;

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

iteration();

for (cell in game){
	game[cell].changeStatus();
}

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

console.log("-----------------------------------")

printBoard();

iteration();

for (cell in game){
	game[cell].changeStatus();
}
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

console.log("-----------------------------------")

printBoard();

iteration();

for (cell in game){
	game[cell].changeStatus();
}
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

console.log("-----------------------------------")

printBoard();




