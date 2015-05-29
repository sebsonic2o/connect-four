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

// var c = function(array, item) {
//   var count = 0;
//   for(var i = 0; i < array.length; i++){
//       if(array[i] == item)
//           count++;
//   }
//   return count;
// }

var Game = function (){
  this.win = false;
  this.color = "yellow";
  this.columns = createNestedArray(7, 6, 'X');
  this.rows = createNestedArray(6, 7, 'X');
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

  return this.color;
}

Game.prototype.checkColumn = function(column) {
  var count = 0;
  var column_to_check = this.columns[column - 1];

  for (var index = 0; index < column_to_check.length ; index++) {

    if (column_to_check[index] == 'X') {
      if (count == 3) {
        this.win = true;
      }
      column_to_check[index] = this.color;
      return index+1;
    }
    else if (column_to_check[index] == this.color) {
      count++;
    }
    else {
      count = 0;
    }

  }
}

Game.prototype.checkRow = function(row, column) {
  var count = 0;
  var row_to_check = this.rows[row - 1];

  // I fill the row to check with the color at the right position
  row_to_check[column - 1] = this.color;

  for (var index = 0; index < row_to_check.length ; index++) {

    if (row_to_check[index] == this.color) {
      count++;
      if (count == 4) {
        return this.win = true;
      }
    }
    else {
      count = 0;
    }

  }

}

Game.prototype.checkColumn = function(column) {
  var count = 0;
  var column_to_check = this.columns[column - 1];

  for (var index = 0; index < column_to_check.length ; index++) {

    if (column_to_check[index] == 'X') {
      if (count == 3) {
        this.win = true;
      }
      column_to_check[index] = this.color;
      return index+1;
    }
    else if (column_to_check[index] == this.color) {
      count++;
    }
    else {
      count = 0;
    }

  }
}

Game.prototype.dropCoin = function(column) {
  var color = this.color;
  var row = this.checkColumn(column);

  if (!this.win) {
    this.checkRow(row, column);
    this.changeColor();
  }

  return { column: column,
    row: row,
    win: this.win,
    color: color
  };
}
