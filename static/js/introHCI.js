'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */

function projectClick(e) {
	console.log("Project clicked!");

	e.preventDefault();

	$(this).css("background", "red");
	$(this).css("border", "10px solid red");
}

function initializePage() {

	console.log("begin!");
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a.thumbnail").click(projectClick);
}
