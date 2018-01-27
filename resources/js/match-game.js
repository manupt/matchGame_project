/*HTML does not have any objects. Jquery is a Javascript framework, it makes it easier to
manipulate HTML using Javascript.
Objects contain data and methods that can be used to manipulate HTML markup.*/

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

     var sequentialValues = [];


     for ( var b =1; b<=8; b++) {  // Write a loop to iterate through each card value, 1 through 8
          sequentialValues.push(b);  // Inside the loop, add the current value to your array of unplaced values, twice
          sequentialValues.push(b);
     }

     var cardValues = [];

     while (sequentialValues.length > 0) {  // Create a while loop that runs until the sequentially-ordered array is empty.
       var randomIndex = Math.floor(Math.random() * sequentialValues.length); //Within the loop, generate a random index in the array of in-order, unplaced values
       var randomValue = sequentialValues.splice(randomIndex, 1)[0]; // Remove the element at the random index from the sequentially-ordered values array.
       cardValues.push(randomValue); // Access the value in the unplaced values array at the random index you just created. Add this value to the end of your randomly-placed values array.
     }
     return cardValues; // Return the randomly-ordered array from the function.
     }

   /* Shuffle function alternative */

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

  $game.data('flippedCards', []); /*At the top of the .renderCards() method, add a data attribute to $game which keeps track of
  the flipped cards. This should initialize — be initially set equal — to an empty array.*/

  $game.empty(); // Start the method by emptying the HTML of the $game object.

/*The object needs to be emptied because everytime you click a card the object will
manipulate the html in some way, sometime changing it. When you go to select another
card you want to select html in that card not a previous card. so thats why you empty the object .*/

  var colors = [           // create an array containing the eight hsl values listed in the design specs as strings.
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];


/* To start, your game jQuery object will need information about which cards are flipped.
   At the top of the .renderCards() method, add a data attribute to $game which keeps track
 of the flipped cards. This should initialize — be initially set equal — to an empty array.*/

  for (var valueIndex = 0; valueIndex < cardValues.length; valueIndex++) { // Start by looping through each value in the cardValues array argument.

    var value = cardValues[valueIndex]; // Add a data attribute representing the card's value on the new card object, setting the value of the data attribute equal to the value at the current index in the cardValues array.
    var color = colors[value - 1]; // Add a data attribute to the card to store its color. Set its color by matching the card's value to the color at a position in the color array. Since the values of the cards are 1 through 8, subtract 1 from the card's value to find the index of the corresponding color in our array.
    var data = {
      value: value,
      color: color,
      isFlipped: false // Add a data attribute to the jQuery card object representing whether or not the card has been flipped. This value should default to false.
    };
    var $card = $('<div class="col-xs-3 card"></div>'); // Inside the loop, create a jQuery object for a new card. This object should be instantiated — created — with the same HTML code you used to render a card in your index.html file
    $card.data(data);  // Add all data to the jQuery card object
    $game.append($card); // Append the card object to $game.
  }

  /* You can now generate the HTML for a game. You will use your .generateCardValues() and .renderCards() methods
  to render the randomly-arranged cards to the page.
     Add a $(document).ready statement to the top of match-game.js and call MatchGame.renderCards() inside of its
  callback function. Make sure to pass the .renderCards() method an array of randomly-ordered card values and a jQuery object
  containing our #game HTML element, created by MatchGame.generateCardValues(), as parameters.*/

  $('.card').click(function() {
    MatchGame.flipCard($(this), $('#game'));
  });

};


MatchGame.flipCard = function($card, $game) {

    if ( $card.data('isFlipped') === true) {
      return;
    } else {
      $card.css('background-color', $card.data('color'));
      $card.text($card.data('value'));
      $card.data('isFlipped', true);
    }

   $game.data('flippedCards').push($card);

    if ($game.data('flippedCards').length === 2) {

      if ($game.data('flippedCards')[0] === $game.data('flippedCards')[1] ) {
          $game.data('flippedCards').css('background-color', rgb(153, 153, 153));
          $game.data('flippedCards').css('color', rgb(204, 204, 204));
      }else{
        $game.data('flippedCards').css('background-color', rgb(32, 64, 89));
        $game.data('flippedCards').text('');
        $game.data('flippedCards').data('isFlipped', false);
      }
    }





  }
