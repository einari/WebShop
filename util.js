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
		
		
		/*
		$.getScript("Features/"+feature+"/view.js", function(data) {
			alert(data);
		});
		
		
		
		$.get("Features/"+feature+"/view.html", function(data) {
			target.html(data);
		});
		*/
		
		//var viewScriptTag = $("script").attr("src","Features/"+feature+"/view.js").attr("type","text/javascript");
		
		//var viewScriptUrl = "Features/"+feature+"/view.js";
		
		//var viewScriptTag = document.createElement("script");
		//viewScriptTag.type = "text/javascript";
		//viewScriptTag.src = "Features/"+feature+"/view.js";
		//$(this).append(viewScriptTag);
		$(this).load("Features/"+feature+"/view.html", function() {
			viewModel.initialize();
			initializeView();
			//initializeViewModel();
		});

		
		//$("body").append($("<script />", { src: viewScriptUrl }))
		
		//$("body").append("<script>alert('hello world');<\/script>");
	});
});

