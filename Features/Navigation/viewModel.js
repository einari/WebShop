(function() {
	function NavigationItem(name) {
		this.name = name;
		
		this.navigate = function() {
			messenger.publish(new NavigateMessage(this.name));
		};
	}
	
	
	function Product(name, description) {
		this.name = name;
		this.description = description;
		
		this.addProduct = function() {
			messenger.publish(new AddProductToCartMessage(this));
		};
		
	}
	

	function ViewModel() {
		var self = this;
		
		this.navigationItems = ko.observableArray([
				new NavigationItem("Hello"),
				new NavigationItem("Second")
		]);
		
		this.products = ko.observableArray([
			new Product("Fancy stuff","This is the most awesome product ever"),
			new Product("Ladyshave","Shaves everything")
		]);
		
		
		this.log = function() {
			messenger.publish(new LogMessage("asdasd"));
		};
		
	}
	
	$(function() {
		ko.applyBindings(new ViewModel())
	});
})();

