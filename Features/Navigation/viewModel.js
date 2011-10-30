/*
var navigationItem = funcion(name) {
	this.name = name;
}*/


var viewModel = {
	navigationItems: [
	{ name: "Hello"},
	{ name: "Second"}
	],
	
	initialize: function() {
		
		ko.applyBindings(viewModel);
	}
}


