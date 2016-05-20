
var state = "first";
var monsters = [
  'monsters-01.png',
  'monsters-02.png',
  'monsters-03.png',
  'monsters-04.png',
  'monsters-05.png',
  'monsters-06.png',
  'monsters-07.png',
  'monsters-08.png',
  'monsters-09.png',
  'monsters-10.png',
  'monsters-11.png',
  'monsters-12.png',
  'monsters-13.png',
  'monsters-14.png',
  'monsters-15.png',
  'monsters-16.png'
];

function match() {
  var openTiles = $('.open img');
  var first = $(openTiles[0]);
  var second = $(openTiles[1]);
  return first.attr('src') === second.attr('src');
}

/*
Takes an array as argument, and returns a new array, which contains the contents of the given array, in random order.
*/
function shuffle(arr) {
  arr = arr.slice(0);
  var newArr = [];
  while (arr.length > 0) {
    var idx = Math.floor(Math.random() * arr.length);
    var item = arr[idx];
    newArr.push(item);
    arr.splice(idx, 1);
  }
  return newArr;
}

/*
Create tiles for each monster in the monsters array, append these
to the #grid element.
*/
function makeTiles(numMonsters, columns) {
  // Chose 4 monsters
  var randomMonsters = shuffle(monsters);
  var chosenMonsters = randomMonsters.slice(0, numMonsters);

  // duplicate the monster cards
  var cards = [];
  for (var i = 0; i < chosenMonsters.length; i++) {
    var monster = chosenMonsters[i];
    cards.push(monster);
    cards.push(monster);
  }

  cards = shuffle(cards);

  var html = '';
  for (var i = 0; i < cards.length; i++) {
    html += '<div class="tile">\
      <img class="monster" src="images/' + cards[i] + '\">\
      <div class="back"></div>\
    </div>';
  }
  $('#grid')
    .addClass('column-' + columns)
    .append(html);
}

$(function () {
  makeTiles(16, 8);
  $('.tile').click(function() {
    if ($(this).hasClass('open')) {
      return;
    }
    if (state === "first") {
      $(this).addClass('open');
      state = "second";
    } else if (state === "second") {
      $(this).addClass('open');
      state = "first";

      if (match()) {
        $('.open').removeClass('open')
          .addClass('matched');
      } else {
        setTimeout(function() {
          $('.tile').removeClass('open');
        }, 1000);
      }

    }
    var matched = $('.matched').length;
    var totalCards = $('.tile').length;
    if (matched === totalCards) {
      $('#message').text('You win!');
    }

  });
});
