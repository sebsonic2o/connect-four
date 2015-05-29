var createNestedArray = function(first_dimension, second_dimension, default_value) {
  var nestedArray = new Array(first_dimension);

  for (var i = 0; i < first_dimension; i++) {
    nestedArray[i] = new Array(second_dimension);
    for (var j = 0; j < second_dimension; j++)
      nestedArray[i][j] = default_value;
  }

  return nestedArray;
}

// Game constructor
var Game = function (){
  this.win = false;
  this.color = "yellow";
  this.columns = createNestedArray(7, 6, 'X');
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

Game.prototype.placeCoin = function(column) {
  var columnToCheck = this.columns[column];

  for (var index = 0; index < columnToCheck.length ; index++) {
    if (columnToCheck[index] == 'X') {
      columnToCheck[index] = this.color;
      return index;
    }
  }

  return -1;
}

// Check column for win
Game.prototype.checkColumn = function(column) {
  var count = 0;
  var columnToCheck = this.columns[column];

  for (var index = 0; index < columnToCheck.length ; index++) {

    if (columnToCheck[index] == this.color) {

      if (count == 3) {
        return true;
      }

      count++;
    }
    else {
      count = 0;
    }
  }

  return false;
}

// Check row for win
Game.prototype.checkRow = function(row, column) {
  var count = 0;

  for (var index = 0; index < this.columns.length ; index++) {

    if (this.columns[index][row] == this.color) {

      if (count == 3) {
        return true;
      }

      count++;
    }
    else {
      count = 0;
    }
  }

  return false;
}

// Check left to right diagonal for win
Game.prototype.checkRightDiagonal = function(row, column) {
  var count = 0;

  // going up
  var j = row+1;
  for (var i = column+1; i < this.columns.length; i++) {
    if (j >= this.columns[i].length || this.columns[i][j] != this.color) {
      break;
    }
    else {
      count++;
    }
    j++;
  }
  // going down
  var j = row-1;
  for (var i = column-1; i >= 0; i--) {
    if (j < 0 || this.columns[i][j] != this.color) {
      break;
    }
    else {
      count++;
    }
    j--;
  }

  if (count == 3) {
    return true;
  }

  return false;
}

// Check right to left diagonal for win
Game.prototype.checkLeftDiagonal = function(row, column) {
  var count = 0;

  // going up
  var j = row+1;
  for (var i = column-1; i >= 0; i--) {
    if (j >= this.columns[i].length || this.columns[i][j] != this.color) {
      break;
    }
    else {
      count++;
    }
    j++;
  }
  // going down
  var j = row-1;
  for (var i = column+1; i < this.columns.length; i++) {
    if (j < 0 || this.columns[i][j] != this.color) {
      break;
    }
    else {
      count++;
    }
    j--;
  }

  if (count == 3) {
    return true;
  }

  return false;
}

Game.prototype.checkWin = function(row, column) {

  if (this.checkColumn(column)) {
    return true;
  }

  if (this.checkRow(row, column)) {
    return true;
  }

  if (this.checkLeftDiagonal(row, column)) {
    return true;
  }

  if (this.checkRightDiagonal(row, column)) {
    return true;
  }

  return false;
}

Game.prototype.dropCoin = function(column) {
  column--;
  var color = this.color;
  var row = this.placeCoin(column);

  this.win = this.checkWin(row, column);

  if (!this.win) {
    this.changeColor();
  }

  return { column: column+1,
    row: row+1,
    win: this.win,
    color: color
  };
}
