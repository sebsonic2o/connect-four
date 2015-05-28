//user can start a new game
//user can drop a coin in a column and return a position on board
//user can check for four in a row win

var createNestedArray = function(first_dimension, second_dimension, default_value) {
  var nestedArray = new Array(first_dimension);
  for (var i = 0; i < first_dimension; i++) {
    nestedArray[i] = new Array(second_dimension);
    for (var j = 0; j < second_dimension; j++)
      nestedArray[i][j] = default_value;
  }
  return nestedArray;
}

var Game = function (){
  this.color = "yellow";
  this.columns = createNestedArray(7, 6, 'X')
  // this.player2
  // this.blueCoin
  // this.yellowCoin
  // this.coinPosition
}

Game.prototype.changeColor = function() {
  if (this.color == "yellow") {
    this.color = "blue";
  }
  else {
    this.color = "yellow";
  }

  return this.color
}

Game.prototype.checkColumn = function(column) {
  //game checks board for 4 in a row.
  var column_to_check = this.columns[column - 1];

  for (var index = 0; index < column_to_check.length ; index++) {
    if (column_to_check[index] == 'X') {
      column_to_check[index] = this.color;
      return index+1;
    }
  }
}

Game.prototype.checkWin = function() {
  //game checks board for 4 in a row.
  //
}

Game.prototype.dropCoin = function(column) {
  //player drops coin returns a position on board
  //game checks positions on board..
  //  if board position is empty
  //place blue or yellow coin in that position..
  var color = this.color
  var row = this.checkColumn(column);
  var win = this.checkWin();

  if (!win) {
    this.changeColor();
  }

  return { column: column,
    row: row,
    win: win,
    color: color
  };
}

// game = new Game();

// for (i=1; i<3; i++) {
//   for (j=1; j<8; j++) {
//     result = game.dropCoin(j);
//     console.log(result["color"]);
//     console.log(result["row"]);
//   }
// }

// console.log(game.columns);
