var rootPath = rootPath || "file:///Users/einari/Projects/WebShop/"

function stuff() {
	document.write("<script src='"+rootPath+"scripts.js' type='text/javascript'><\/script>");
	
	this.loadedScripts = {};
	
	this.requires = function(scriptName) {
		if( !this.loadedScripts[scriptName] && scripts[scriptName] ) {
			var script = scripts[scriptName];
			var scriptUrl = "";
			if( typeof script == "string" )
			scriptUrl = script;
			else {
				scriptUrl = script.script;
				document.write("<link rel='stylesheet' type='text/css' media='screen' href='"+rootPath+script.stylesheet+"'>");
			}

			document.write("<script src='"+rootPath+scriptUrl+"' type='text/javascript'><\/script>");

			this.loadedScripts[scriptName] = true;
		}
	};

	this.preloadScripts = function() {
		for( var script in scripts ) {
			this.requires(script);
		}
	}

};

var r = r || new stuff();
