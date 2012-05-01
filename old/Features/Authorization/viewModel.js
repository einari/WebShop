var viewModel = {
	userName: ko.observable(""),
	password: ko.observable(""),
	
	login: function() {
		alert(this.userName() +" : "+this.password());
	}
};

ko.applyBindings(viewModel);










