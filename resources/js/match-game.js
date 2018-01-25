$(document).ready (function() {

  MatchGame.renderCards ();

});


var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */
 MatchGame.generateCardValues = function () {

     var array = [];
     for ( var b =1; b<=8; b++) {
          array.push(b);
          array.push(b);
     }
     var arrayRandom = [];

     function shuffle(array) {

       var currentIndex = array.length, temporaryValue, randomIndex;

   // While there remain elements to shuffle...
       while (0 !== currentIndex) {

     // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;

     // And swap it with the current element.
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
   }
   return array;
   }
     arrayRandom = shuffle(array);
     return arrayRandom;
 }

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/
MatchGame.renderCards = function(cardValues, $game) {


  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

  $game.empty();

  $game.data('flippedCards', []);

  for (var valueIndex = 0; valueIndex < cardValues.length; valueIndex++) {
    var value = cardValues[valueIndex];
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    };
    var $cardElement = $('<div class="col-xs-3 card"></div>');
    $cardElement.data(data);
    $game.append($cardElement);
  }

  $('.card').click(function() {
    MatchGame.flipCard($(this), $('#game'));
  });
};


MatchGame.flipCard = function($card, $game) {

  $('.card').click(function() {

  if ($(this).isFlipped = true) {
    return;
   } else {
        $(this).css('background-color', 'color');
        $(this).text('value');
        $(this).isFlipped.data(true);
    }
  });
  }
