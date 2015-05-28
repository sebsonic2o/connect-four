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
    var result = game.dropCoin(column);
    drawCoin(result);
  });
}

var drawCoin = function(hash) {
  var column = hash.column;
  var row = hash.row;
  var color = hash.color;
  var win = hash.win;
  // animateCoin(column);
  $(".column-" + column + ".row-" + row).addClass("coin animated flip " + color)
  flipCoin(color);

  if (win == true) {
    $(".board .win").show();
  }
}

var animateCoin = function(column) {
  var coin = $(".animate-coin");
  coin.css( "left", "100px" );
  coin.show();
  coin.css( "top", "300px");
}

var flipCoin = function(color) {
  if (color == "yellow") {
    $("#coin-blue").show();
    $("#coin-yellow").hide();
    $(".coin").css("left", "0");
    $(".coin").css("top", "0");
  }
  else {
    $("#coin-yellow").show();
    $("#coin-blue").hide();
    $(".coin").css("left", "0");
    $(".coin").css("top", "0");
  }
}

var game = new Game();

drawBoard();
findColumn();
$("#coin-blue").hide();

// drawCoin({column: 4, row: 6, color: "yellow"});
// drawCoin({column: 2, row: 5, color: "blue"});
console.log("document loaded");
