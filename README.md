# jquery.fingerpointer

_fingerpointer_ is a tiny jQuery plugin to provide a simple switch between touch and mouse events. In the case you are planning to use the same web application for touch and desktop clients, you definitely need this plugin.

- Lightweight (less than 300 bytes)
- Stops messing up your event space
- Simply based on jQuery 1.7 on/off methods
- finger and pointer feels more natural

## Example

Usually you would bind a mouse event like that:

	$('a').on('click', myFunc);

So far there are no problems since click also works perfectly fine on touch events. Imagine you want to have different events for the same function call on touch devices.

	var isTouch = 'ontouchstart' in window; 

	if(isTouch) {
		$('a').on('taphold', myFunc);
	} else {
		$('a').on('click', myFunc);
	}

Now the way you can achieve that with fingerpointer:

	$('a').fipo('taphold', 'click', myFunc);

Pretty easy, right? But if you have some event calls exclusively for touch or pointer devices you can use this fancy functions:

	$('a').finger('taphold', myFunc);
	$('a').pointer('click', myFunc2);
	
Or just chain them

	$('a').finger('taphold', myFunc)
		.pointer('click', myFunc2);
	