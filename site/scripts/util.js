var jvm = jvm || {};
jvm.util = (function(w, d, $){
	
	var _setEventListener = function(options){
		options.$node.on(options.event, options.eventListener);
		for(var args in arguments){
			console.group('_SET EVENT LISTENER');
				console.log('arguments[args];\t', arguments[args]);
			console.groupEnd();	
		}
	};

	return{ // public API
		setEventListener:_setEventListener
	};

})(window, document, jQuery);