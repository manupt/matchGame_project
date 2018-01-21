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

  $('#game').empty();

  $('#game').data('flippedCards', []);

  var colors = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(160, 85%, 65%)', 'hsl(220, 85%, 65&)', 'hsl(265, 85%, 65%)', 'hsl(310, 85%, 65%)', 'hsl(360, 85%, 65%)'];

//Loop
  for (var x =0; x<=cardValues.length; x++){

    var $card = $('<div class="col-xs-3 card"></div>');
    $card.data('value', x);
  }
  //Flip or no Flip
    $card.click(function() {

        if( $(this).$card) {
          $card.data(true);
        }else{
            $card.data(false);
        }
    });

  //Color data
       while (x<=cardValues.length) {
        x = cardValues.length - 1;
        $card.data(colors[x]);
    }

    $('#game').append($card);
};
/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
