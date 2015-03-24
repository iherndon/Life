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

function cell (display, isAlive){
	this.display = display;
	this.isAlive = isAlive;
	this.checkStatus = function(){
		if (this.isAlive){
			this.display = "0";
		} else {
			this.displayu = "-";
		}
	}
}

for (var i = 0; i < 200; i++){
	game[i] = new cell("-", false);
}

rowOne = createRow(0);
function createRow(rowNum){
	var tempArray = [];
	for (var cell in game){
		if (cell >= rowNum * 20 && cell < rowNum * 20 + 20){
			tempArray.push(game[cell].display);
		}
	}
	return tempArray
}
console.log(rowOne.join(''));

for (cell in game){
	game[cell].isAlive = ;
}

for (cell in game){
	game[cell].checkStatus();
}

rowOne = createRow(0);


console.log(rowOne.join(''));



