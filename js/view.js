var drawBoard = function() {
  for (var row = 6; row >= 1; row-- ) {
    for (var column = 1; column <= 7; column++) {
      console.log();
      $(".board").append("<div class='cell column-" + column + " row-" + row + "'>" + column +"," + row +"</div>");
    }
  }
}

var findColumn = function() {
  $(".cell").on("click", function() {
    //read in the column of the cell user has clicked
    var myClass = $(this).attr('class');
    var column = parseInt(this.classList[1].slice(-1))
    //pass column into data function
    game.dropCoin(column);
  });
}

var dropCoin = function(hash) {
  var column = hash.column;
  var row = hash.row;
  var color = hash.color;
  var win = hash.win;
  $(".column-" + column + ".row-" + row).addClass("coin " + color)
  if (win == true) {
    $(".board .win").show();
  }
}

drawBoard();
findColumn();
dropCoin({column: 4, row: 6, color: "yellow"});
console.log("document loaded");
