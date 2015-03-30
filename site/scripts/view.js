var jvm = jvm || {};
/**
     Used: closure for any member in scripts/view.js
     @alias jvm.view
     @namespace
 */
jvm.view = (function(w, d, $){

    /**
	     Used: namespace for any dom method: appending, adding events, node manipulation
	     @alias dom
	     @namespace
     */
	var dom = {
	/**
		Used: set any listener, native or custom
		@member
		@example
		dom.setListener({$node:$('#idNode'), event:'click', data:'anyData', listener:myListener});	 
	 */        
		setListener:function(options){			
			options.$node.on(options.event, options.data, options.listener);
		}
	};

 /**
	 @fileOverview
	 @description Description: Raises tooltip relative to cursor position
	 @Name Tooltip
	 @author Glenn
	 @access private
	 @exception none
	 @private
	 @Class
	 @return null
	 @this Tooltip instance
	 @version 1.141	
	 @todo need a manager/factory to ensure only one unique tooltip instantiated
	 @param paramText {String} tooltip's inner HTML
	 @example
	 var myTooltip = new Tooltip('any tool tip text')
	 dom.setListener({$node:$nodeExist, event:'mouseover', data:objToolTip, listener:objToolTip.show});
	 dom.setListener({$node:$nodeExist, event:'mouseout', data:objToolTip, listener:objToolTip.hide});
**/ 
	var Tooltip = function(paramText){

		this.delayTimeout = null;
		this.delay = 1500;
		this.text = paramText;
		/* @const {string} */
		var deleteThis = 'Hello World';
		this.element = d.createElement('div');

		// append tooltip using jvm.ui
		var nodeExist = d.getElementsByTagName('body')[0];
	};
	Tooltip.prototype = {        		
		startDelay:function(e, text){

			if(this.delayTimeout == null){
				var that = e.data;
				var offset = $(this).offset();
				var x = e.pageX - offset.left;
				var y = e.pageY - offset.top;
				
				this.delayTimeout = w.setTimeout(function(){
					that.show(x, y, that.text);
				}, this.delay);
			}
		},
		show:function(x, y, paramText){
			w.clearTimeout(this.delayTimeout);
			this.delayTimeout = null;
			var strX = x + 'px; ';
			var strY = y + 'px; ';
			var frag = new jvm.ui.dom.createToolTip({text:paramText});
			var nodeExist = d.getElementsByTagName('body')[0];
			this.element.appendChild(frag);
			nodeExist.appendChild(this.element);
			this.element.setAttribute('class', 'show');
			this.element.setAttribute('style', 'position:absolute; top:' + strY + 'left' + strX  );
		},
		hide:function(e){
			var that = e.data;
			w.clearTimeout(this.delayTimeout);
			this.delayTimeout = null;
			var strClass = null;

			that.element.setAttribute('class', 'hide');
		}
	};


 /**
	 @fileOverview
	 @description Description: Entry point for methods to invoke after DOM loaded
	 @Name main
	 @author Glenn
	 @access private
	 @exception none
	 @private
	 @Class
	 @return null
	 @version 1.141	
	 @param none
	 @example
	 Only accessible within lclInterval, a method which waits for DOM loaded
**/ 
	var main = function(){

		var objToolTip = new Tooltip('Hello Universe');
		var $nodeExist = $('#container');
		dom.setListener({$node:$nodeExist, event:'mouseover', data:objToolTip, listener:objToolTip.startDelay});
		dom.setListener({$node:$nodeExist, event:'mouseout', data:objToolTip, listener:objToolTip.hide});
	};

	var lclInterval = w.setInterval(function(){
		if(d.getElementsByTagName('div').length >= 1){
			w.clearInterval(lclInterval); 
			lclInterval = null;
			main();
		}
	}, 33);

})(window, document, jQuery);