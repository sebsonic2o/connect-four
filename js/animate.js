$( init );

function init() {
  $('#coin-blue').draggable();
  $('#coin-yellow').draggable();
  $('.cell').droppable( {
    drop: handleDropEvent
  } );
}

function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;
  console.log(this)
  // alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
  var myClass = $(this).attr('class');
    var column = parseInt(this.classList[1].slice(-1))
    //pass column into data function
    var result = game.dropCoin(column);
    drawCoin(result);
}
