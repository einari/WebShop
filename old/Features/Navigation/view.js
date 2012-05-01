console.log("Before scope - view");
(function() {
	console.log("View");
	$(function() {
		console.log("loaded");
		$("#tabs").tabs();
	});
})();