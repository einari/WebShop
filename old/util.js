var util = util || {

/*	
	function extend(destination, source) {  
	    var toString = Object.prototype.toString,  
	        objTest = toString.call({});  
	    for (var property in source) {  
	        if (source[property] && objTest == toString.call(source[property])) {  
	            destination[property] = destination[property] || {};  
	            extend(destination[property], source[property]);  
	        } else {  
	            destination[property] = source[property];  
	        }  
	    }  
	    return destination;  
	};	
*/
	
	
};

$(function() {
	$("*[data-feature]").each(function() {
		var target = $(this);
		
		var feature = $(this).attr("data-feature");


		$.get("Features/"+feature+"/view.html", function(data) {
			var oldjQuery = jQuery;
			var old$ = $;
			var self = $(this);

			/*

			jQuery = function(fn) {
				console.log("My jQuery");
				fn();
				return oldjQuery();
			};

			$ = jQuery;*/
			


			$ = function(fn) {
				console.log("Nonnono");
				
				if( typeof fn == "function") {
					fn();
					return jQuery;
				}
				
				return jQuery(fn);
			};


			old$(target).html(data);


			jQuery = oldjQuery;
			$ = old$;

			
		});


/*

		var oldjQuery = jQuery;
		var old$ = $;
		var self = $(this);
		
		jQuery = function(fn) {
			console.log("My jQuery");
			fn();
			return oldjQuery();
		};
		
		$ = jQuery;
		
		
		$(function() {
			console.log("asdasd");
			
		});
		
		jQuery = oldjQUery;
		$ = old$;


*/		

		
		
		/*
		$(this).load("Features/"+feature+"/view.html", function() {
			
			
			
			var i=0;
			i++;
		});*/
	});
});

