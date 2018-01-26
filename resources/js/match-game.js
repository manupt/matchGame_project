// HTML does not have any objects. Jquery is a Javascript framework, it makes it easier to
// manipulate HTML using Javascript.
// Objects contain data and methods that can be used to manipulate HTML markup.

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


     var sequentialValues = [];

     for ( var b =1; b<=8; b++) {
          sequentialValues.push(b);
          sequentialValues.push(b);
     }

     while (sequentialValues.length > 0) {
       var randomIndex = Math.floor(Math.random() * sequentialValues.length);
       var randomValue = sequentialValues.splice(randomIndex, 1)[0];
       cardValues.push(randomValue);
     }
     return cardValues;
     }


  // function shuffle(sequentialValues) {
  //
   // var currentIndex = array.length, temporaryValue, randomIndex;

   // /*While there remain elements to shuffle..*/
   //     while (0 !== currentIndex) {
   //
   //   /*Pick a remaining element...*/
   //     randomIndex = Math.floor(Math.random() * currentIndex);
   //     currentIndex -= 1;
   //
   //   /*And swap it with the current element.*/
   //     temporaryValue = sequentialValues[currentIndex];
   //     sequentialValues[currentIndex] = sequentialValues[randomIndex];
   //     sequentialValues[randomIndex] = temporaryValue;

   //     cardValues = shuffle(sequentialValues);
   // }
  //   return cardValues;
  // }


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/
MatchGame.renderCards = function(cardValues, $game) {

  $game.empty();
// The object needs to be emptied because everytime you click a card the object will
// manipulate the html in some way, sometime changing it. When you go to select another
// card you want to select html in that card not a previous card. so thats why you empty the object .

  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];


// To start, your game jQuery object will need information about which cards are flipped.
//  At the top of the .renderCards() method, add a data attribute to $game which keeps track
//  of the flipped cards. This should initialize — be initially set equal — to an empty array.
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







  }
