var sget = require('sget');

var gameOfLife = {
	cells: {},
	rows: [],
	rowNum: 20,
	colNum: 0,
	pusherNums: [1],
	aliveIcons: ["\u25C8", "\u25A9"],

	printBoard: function(){
		this.rows.forEach(function(item){
		console.log(item.join(''));
		})
	},
	createBoard: function(){
		for (var i = 0; i < this.rowNum; i++){
			var tempArray = [];
			for (cell in this.cells){
				if (cell >= i * this.colNum && cell < i * this.colNum + this.colNum){
					tempArray.push(this.cells[cell].display);
				}
			}
			this.rows.push(tempArray);
		}	
	},
	produceCells: function(){
		for (var i = 0; i < this.rowNum * this.colNum; i++)
			this.cells[i] = new cell(" ", false, false);
	},
	pusher: function(){
		var array = [];
		for (var i = 0; i < gameOfLife.pusherNums.length; i++){

			if (gameOfLife.cells[Number(cell) + gameOfLife.pusherNums[i]] !== undefined){
				array.push(this.cells[Number(cell) + gameOfLife.pusherNums[i]]);
			}
			if (gameOfLife.cells[Number(cell) - gameOfLife.pusherNums[i]] !== undefined){
				array.push(gameOfLife.cells[Number(cell) - gameOfLife.pusherNums[i]]);
			}
		}
		return array;
	

	},
	iteration: function(){
		for (cell in this.cells){
			var alive = 0;
			var tempArray = this.pusher();
			tempArray.forEach(function(item){
				if (item.isAlive === true)
					alive += 1;
				});
			if(this.cells[cell].isAlive === true && (alive < 2 || alive > 3)) {
				this.cells[cell].nextIt = false;
			} else if (this.cells[cell].isAlive === false && alive === 3) {
				this.cells[cell].nextIt = true;
			} else if (this.cells[cell].isAlive === false){
				this.cells[cell].nextIt = false;
			} else {
				this.cells[cell].nextIt = true;
			}
		}
	},
	checkStatusAll: function(){
		for (cell in this.cells)
			this.cells[cell].checkStatus();
	},
	changeStatusAll: function(){
		for (cell in this.cells){
			this.cells[cell].changeStatus();
		}
	},
	runGameOnInterval: function(repititions){
		var x = 0;
		var intervals = setInterval (function(){
		gameOfLife.printBoard();

		gameOfLife.iteration();

		gameOfLife.changeStatusAll();

		gameOfLife.checkStatusAll();

		gameOfLife.createBoard();
		x++;
		if (x === repititions){
			clearInterval(intervals);
		}
		}, 150);
	},
	startGame: function(){
		console.log("Which number do you like better '7' or '1'?")
		var answer = sget().trim();
		var reps;
		if (answer === "7"){
			this.colNum = 40;
			this.produceCells();
			setBoardGliderGun();
			reps = 85;
		} else if (answer === '1') {
			this.colNum = 20;
			this.produceCells();
			setBoardPulsar();
			reps  = 21;
		} else {
			this.colNum = 20;
			this.produceCells();
			setBoardBeacon();
			reps = 15;
		}
		this.pusherNums.push(this.colNum, this.colNum - 1, this.colNum + 1);
		this.checkStatusAll();
		this.createBoard();	

		this.runGameOnInterval(reps);

	}
}





function cell (display, isAlive, nextIt){
	this.display = display;
	this.isAlive = isAlive;
	this.nextIt = nextIt;
	this.changeStatus = function(){
		return this.isAlive = this.nextIt;
	}
	this.checkStatus = function(){
		if (this.isAlive){
			this.display = "\u25A9";
		} else {
			this.display = " ";
		}
	}
}



function setBoardToad (){
gameOfLife.cells[70].isAlive = true;
gameOfLife.cells[71].isAlive = true;
gameOfLife.cells[72].isAlive = true;
gameOfLife.cells[89].isAlive = true;
gameOfLife.cells[90].isAlive = true;
gameOfLife.cells[91].isAlive = true;

}

function setBoardBeacon (){
gameOfLife.cells[65].isAlive = true;
gameOfLife.cells[66].isAlive = true;
gameOfLife.cells[85].isAlive = true;
gameOfLife.cells[108].isAlive = true;
gameOfLife.cells[128].isAlive = true;
gameOfLife.cells[127].isAlive = true;	

}

function setBoardPulsar (){
	gameOfLife.cells[46].isAlive = true;
	gameOfLife.cells[47].isAlive = true;
	gameOfLife.cells[48].isAlive = true;
	gameOfLife.cells[52].isAlive = true;
	gameOfLife.cells[53].isAlive = true;
	gameOfLife.cells[54].isAlive = true;
	gameOfLife.cells[84].isAlive = true;
	gameOfLife.cells[89].isAlive = true;
	gameOfLife.cells[91].isAlive = true;
	gameOfLife.cells[96].isAlive = true;
	gameOfLife.cells[116].isAlive = true;
	gameOfLife.cells[136].isAlive = true;
	gameOfLife.cells[104].isAlive = true;
	gameOfLife.cells[109].isAlive = true;
	gameOfLife.cells[111].isAlive = true;
	gameOfLife.cells[129].isAlive = true;
	gameOfLife.cells[131].isAlive = true;
	gameOfLife.cells[146].isAlive = true;
	gameOfLife.cells[147].isAlive = true;
	gameOfLife.cells[148].isAlive = true;
	gameOfLife.cells[186].isAlive = true;
	gameOfLife.cells[187].isAlive = true;
	gameOfLife.cells[188].isAlive = true;
	gameOfLife.cells[286].isAlive = true;
	gameOfLife.cells[287].isAlive = true;
	gameOfLife.cells[288].isAlive = true;
	gameOfLife.cells[152].isAlive = true;
	gameOfLife.cells[153].isAlive = true;
	gameOfLife.cells[154].isAlive = true;
	gameOfLife.cells[192].isAlive = true;
	gameOfLife.cells[193].isAlive = true;
	gameOfLife.cells[194].isAlive = true;
	gameOfLife.cells[292].isAlive = true;
	gameOfLife.cells[293].isAlive = true;
	gameOfLife.cells[294].isAlive = true;	
	gameOfLife.cells[124].isAlive = true;
	gameOfLife.cells[204].isAlive = true;
	gameOfLife.cells[224].isAlive = true;
	gameOfLife.cells[244].isAlive = true;
	gameOfLife.cells[216].isAlive = true;
	gameOfLife.cells[236].isAlive = true;
	gameOfLife.cells[256].isAlive = true;
	gameOfLife.cells[209].isAlive = true;
	gameOfLife.cells[211].isAlive = true;
	gameOfLife.cells[231].isAlive = true;
	gameOfLife.cells[251].isAlive = true;
	gameOfLife.cells[229].isAlive = true;
	gameOfLife.cells[249].isAlive = true;


}

function setBoardGliderGun (){
	gameOfLife.cells[201].isAlive = true;
	gameOfLife.cells[241].isAlive = true;
	gameOfLife.cells[202].isAlive = true;
	gameOfLife.cells[242].isAlive = true;

	gameOfLife.cells[133].isAlive = true;
	gameOfLife.cells[134].isAlive = true;
	gameOfLife.cells[176].isAlive = true;
	gameOfLife.cells[217].isAlive = true;
	gameOfLife.cells[255].isAlive = true;
	gameOfLife.cells[257].isAlive = true;
	gameOfLife.cells[258].isAlive = true;
	gameOfLife.cells[297].isAlive = true;
	gameOfLife.cells[172].isAlive = true;
	gameOfLife.cells[211].isAlive = true;
	gameOfLife.cells[251].isAlive = true;
	gameOfLife.cells[291].isAlive = true;
	gameOfLife.cells[332].isAlive = true;
	gameOfLife.cells[373].isAlive = true;
	gameOfLife.cells[374].isAlive = true;
	gameOfLife.cells[336].isAlive = true;

	gameOfLife.cells[221].isAlive = true;
	gameOfLife.cells[222].isAlive = true;
	gameOfLife.cells[181].isAlive = true;
	gameOfLife.cells[182].isAlive = true;
	gameOfLife.cells[141].isAlive = true;
	gameOfLife.cells[142].isAlive = true;
	gameOfLife.cells[103].isAlive = true;
	gameOfLife.cells[105].isAlive = true;
	gameOfLife.cells[65].isAlive = true;
	gameOfLife.cells[263].isAlive = true;
	gameOfLife.cells[265].isAlive = true;
	gameOfLife.cells[305].isAlive = true;

	gameOfLife.cells[155].isAlive = true;
	gameOfLife.cells[156].isAlive = true;
	gameOfLife.cells[195].isAlive = true;
	gameOfLife.cells[196].isAlive = true;
}

function setBoardCross (){
	gameOfLife.cells[95].isAlive = true;
	gameOfLife.cells[135].isAlive = true;
	gameOfLife.cells[175].isAlive = true;
	gameOfLife.cells[215].isAlive = true;
	gameOfLife.cells[255].isAlive = true;

	gameOfLife.cells[415].isAlive = true;
	gameOfLife.cells[455].isAlive = true;
	gameOfLife.cells[495].isAlive = true;
	gameOfLife.cells[535].isAlive = true;
	gameOfLife.cells[575].isAlive = true;

	
	gameOfLife.cells[332].isAlive = true;
	gameOfLife.cells[331].isAlive = true;
	gameOfLife.cells[330].isAlive = true;
	gameOfLife.cells[329].isAlive = true;
	gameOfLife.cells[328].isAlive = true;
	gameOfLife.cells[327].isAlive = true;
	gameOfLife.cells[326].isAlive = true;
	gameOfLife.cells[325].isAlive = true;
	gameOfLife.cells[324].isAlive = true;
	gameOfLife.cells[323].isAlive = true;

	gameOfLife.cells[338].isAlive = true;
	gameOfLife.cells[339].isAlive = true;
	gameOfLife.cells[340].isAlive = true;
	gameOfLife.cells[341].isAlive = true;
	gameOfLife.cells[342].isAlive = true;
	gameOfLife.cells[343].isAlive = true;
	gameOfLife.cells[344].isAlive = true;
	gameOfLife.cells[345].isAlive = true;
	gameOfLife.cells[346].isAlive = true;
	gameOfLife.cells[347].isAlive = true;

	gameOfLife.cells[725].isAlive = true;
	gameOfLife.cells[727].isAlive = true;
	gameOfLife.cells[724].isAlive = true;
	gameOfLife.cells[723].isAlive = true;
	gameOfLife.cells[223].isAlive = true;
	gameOfLife.cells[224].isAlive = true;
	gameOfLife.cells[225].isAlive = true;
	gameOfLife.cells[227].isAlive = true;

	gameOfLife.cells[121].isAlive = true;
	gameOfLife.cells[122].isAlive = true;
	gameOfLife.cells[123].isAlive = true;
	gameOfLife.cells[201].isAlive = true;
	gameOfLife.cells[202].isAlive = true;
	gameOfLife.cells[203].isAlive = true;





}


gameOfLife.startGame();
