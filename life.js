var sget = require('sget');

var game = {

};


var rows = [];

var board = {};



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
			this.display = " ";
		}
	}
}

for (var i = 0; i < 400; i++){
	game[i] = new cell(" ", false, false);
}


function printBoard(){
	rows.forEach(function(item){
		console.log(item.join(''));
	})
}



function createBoard(rowNum, colNum){
	if(arguments.length === 1){
		colNum = rowNum;
	}
	for (var i = 0; i < rowNum; i++){
		var tempArray = [];
		for (cell in game){
			if (cell >= i * colNum && cell < i * colNum + colNum){
				tempArray.push(game[cell].display);
			}
		}
		rows.push(tempArray);
	}
	
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
	for (cell in game){
		var tempArray = [];
		var alive = 0;
		pusher(20, tempArray);
		pusher(1, tempArray);
		pusher(19, tempArray);
		pusher(21, tempArray);
		tempArray.forEach(function(item){
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
	}
}

function setBoardToad (){
game[70].isAlive = true;
game[71].isAlive = true;
game[72].isAlive = true;
game[89].isAlive = true;
game[90].isAlive = true;
game[91].isAlive = true;

}

function setBoardBeacon (){
game[65].isAlive = true;
game[66].isAlive = true;
game[85].isAlive = true;
game[108].isAlive = true;
game[128].isAlive = true;
game[127].isAlive = true;	

}

function setBoardPulsar (){
	game[46].isAlive = true;
	game[47].isAlive = true;
	game[48].isAlive = true;
	game[52].isAlive = true;
	game[53].isAlive = true;
	game[54].isAlive = true;
	game[84].isAlive = true;
	game[89].isAlive = true;
	game[91].isAlive = true;
	game[96].isAlive = true;
	game[116].isAlive = true;
	game[136].isAlive = true;
	game[104].isAlive = true;
	game[109].isAlive = true;
	game[111].isAlive = true;
	game[129].isAlive = true;
	game[131].isAlive = true;
	game[146].isAlive = true;
	game[147].isAlive = true;
	game[148].isAlive = true;
	game[186].isAlive = true;
	game[187].isAlive = true;
	game[188].isAlive = true;
	game[286].isAlive = true;
	game[287].isAlive = true;
	game[288].isAlive = true;
	game[152].isAlive = true;
	game[153].isAlive = true;
	game[154].isAlive = true;
	game[192].isAlive = true;
	game[193].isAlive = true;
	game[194].isAlive = true;
	game[292].isAlive = true;
	game[293].isAlive = true;
	game[294].isAlive = true;	
	game[124].isAlive = true;
	game[204].isAlive = true;
	game[224].isAlive = true;
	game[244].isAlive = true;
	game[216].isAlive = true;
	game[236].isAlive = true;
	game[256].isAlive = true;
	game[209].isAlive = true;
	game[211].isAlive = true;
	game[231].isAlive = true;
	game[251].isAlive = true;
	game[229].isAlive = true;
	game[249].isAlive = true;


}

function setBoardGliderGun (){

}

// setBoardToad();
// setBoardGliderGun();
setBoardPulsar();

function checkStatusAll(){
	for (cell in game)
	game[cell].checkStatus();
}

checkStatusAll();

createBoard(20);



// printBoard();






	setInterval (function(){
		printBoard();

		iteration();

		for (cell in game){
			game[cell].changeStatus();
		}

		checkStatusAll();

		createBoard(20);
		}, 350);


