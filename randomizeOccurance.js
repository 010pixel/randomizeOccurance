/*
 * randomizeOccurance.js - A simple function to randomize the occurance of an action on a list of elements
 *
 * Copyright (c) 2015 010 Pixel
 *
 * Website:
 * http://www.010pixel.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  1.0.0
 *
*/

'use strict';

var randomizeOccurance =  function ( args ) {

	var defaults = {
		element : null,
		style : null,
		time_interval : null,
		cssclass : null
	};

	args = $.extend(defaults, args);

	if ( !args['element'] ) return;
	
	var chosen = [];

	for ( var i = 0; i < args['element'].length; i++ ) {

		(function (index) { 

			setTimeout(function() {

				if ( args['style'] ) args['element'].eq(index).animate( args['style'], parseInt(args['animation_duration']) );
				if ( args['cssclass'] ) args['element'].eq(index).addClass( args['cssclass'] );

			}, parseInt(args['time_interval']) * getRandom(args['element'].length));

		})(i);

	}

	function getRandom ( length ) {

		var random,
			i = 0;

		do {
		
			i++;

			random = Math.floor(Math.random() * length);

			// Check if the item is already chosen before
			if ( chosen.indexOf(random) == -1 ) {
				// Add to chosen items
				chosen.push(random);
				break;
			}
		
		} while ( i < length );

		return random;
	}

}
