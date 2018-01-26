var MatchGame = {};

$(document).ready(function() {
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});

 /*1 - Because its wrapped within $(document).ready(function()  that means that the code
     will run once the Document Object Model is loaded
 2 - Once loaded, then $game  will use the jQuery selector $  to select an element with the id game
 3 - It will then call the renderGame method of the MatchGame object (which defined in the line
     above (document).ready()  and start the game
 */

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */
 MatchGame.generateCardValues = function () {

      var cardValues = [];
     // var array = [];
     // for ( var b =1; b<=8; b++) {
     //      array.push(b);
     //      array.push(b);
     // }
     // var arrayRandom = [];

     var sequentialValues = [];
     for ( var b =1; b<=8; b++) {
          sequentialValues.push(b);
          sequentialValues.push(b);
     }
     // var arrayRandom = [];

     // function shuffle(array) {
     //
     //   var currentIndex = array.length, temporaryValue, randomIndex;

       while (sequentialValues.length > 0) {
         var randomIndex = Math.floor(Math.random() * sequentialValues.length);
         var randomValue = sequentialValues.splice(randomIndex, 1)[0];
         cardValues.push(randomValue);
       }
   // While there remain elements to shuffle...
   //     while (0 !== currentIndex) {
   //
   //   // Pick a remaining element...
   //     randomIndex = Math.floor(Math.random() * currentIndex);
   //     currentIndex -= 1;
   //
   //   // And swap it with the current element.
   //     temporaryValue = array[currentIndex];
   //     array[currentIndex] = array[randomIndex];
   //     array[randomIndex] = temporaryValue;
   // }
   return cardValues;
   }
     // arrayRandom = shuffle(array);
     // return arrayRandom;


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/
MatchGame.renderCards = function(cardValues, $game) {

  // var $game = [];

  $game.empty();


// var cardValues = MatchGame.generateCardValues ();

  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];



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


// MatchGame.flipCard = function($card, $game) {
//
//
//   $('#game').click(function() {
//
//   if $game.isFlipped === true) {
//     return;
//    } else {
//         $(this).css('background-color', 'color');
//         $(this).text('value');
//         $(this).isFlipped.data(true);
//     }
//   });
//   }
