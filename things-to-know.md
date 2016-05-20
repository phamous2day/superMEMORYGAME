# Things to Know

## Include jquery.js First

Make sure you include jquery.js before your own JS file because your code depends on jQuery.

```
<script src="jquery.js"></script>
<script src="yourcode.js"></script>
```

## $(this) in Event Handler

Inside of a jQuery event handler function, you can access the DOM element that the event occurred on, but in order to gain access to jQuery methods for that element, you have to call `$(this)`.

```
$('button').click(function() {
  // the magical this variable refers to the DOM element that was clicked

  // this won't work
  this.text('O');

  // this will work
  $(this).text('O');
});
```

## setTimeout

To delay sometime - wait a certain amount of time before performing a certain task, you can use the `setTimeout()` function.

```
// this will wait 1 second then print "Hello!". The 1000 is in milliseconds.
var timeoutId = setTimeout(function() {
  console.log('Hello!');
}, 1000);

// you could clear the timer using
// clearTimeout(timeoutId);
```

## addClass(), removeClass(), hasClass()

You can add add a class, remove a class, or detect if an element has a particular class with the addClass(), removeClass(), hasClass() methods

* https://api.jquery.com/addclass/
* https://api.jquery.com/removeclass/
* https://api.jquery.com/hasclass/

## Constructors

Are all functions constructors? All can be used as a constructor with the `new` statement. Usually, the author of the code has an intention of making it a constructor or a regular function. The convention is that constructor names are capitalized.

## attr()

You can use the jQuery .attr() method to get an attribute for a certain element. Example:

```
<img id="myimage" src="images/button.png">
```

```use this to match the values/picture
$('#myimages').attr(src) // gives you "images/button.png"
```

You can also use .attr(value) to set the value of an element.

See more http://api.jquery.com/attr/

## Using class and descendant selector to open/close

* use a class to toggle the open/close appearance of a card

## 3 Ways to show or hide an element

opacity: 0;
display: none; // vs display: block or inline;
visibility: hidden; // vs visibility: visible;

## Finite State Machines

https://en.wikipedia.org/wiki/Finite-state_machine
