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
		},


		getMousePosition:function(paramNode){
			var nodeTarget = paramNode;
			var x = nodeTarget.parentNode.offsetLeft + nodeTarget.scrollLeft;
			var y = nodeTarget.offsetTop - nodeTarget.scrollTop;
			return{ordinate:x, absissa:y};
		} // End getMousePositionz
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
		this.text = paramText; /* TODO: remove text instance variable, should be an array set during this.show */
		/* @const {string} */
		var deleteThis = 'Hello World';
		this.element = d.createElement('div'); /* button container */

		// append tooltip using jvm.ui
		var nodeExist = d.getElementsByTagName('body')[0];
	};
	Tooltip.prototype = {        		
		startDelay:function(e, text){

			var target = e.target;
			
			if(this.delayTimeout == null){  // TODO: what is the purpose of this condition
				var that = e.data;
				that.text = e.target.getAttribute('value');
				var offset = $(this).offset();
			
				var coordinates = dom.getMousePosition(target);
				var x = coordinates,ordinate;
				var y = coordinates.absissa;

				
				this.delayTimeout = w.setTimeout(function(){
					that.show(x, y, that.text, e);
				}, this.delay);
			}
		},
		show:function(x, y, paramText, paramEvent){
			w.clearTimeout(this.delayTimeout);
			this.delayTimeout = null;
			var event = paramEvent;
			var strX = event.screenX + 'px; ';
			var strY = (event.screenY - 65) + 'px; ';


			var frag = new jvm.ui.dom.createToolTip({text:paramText});
			var nodeExist = d.getElementsByTagName('body')[0];


			this.element.appendChild(frag);
			nodeExist.appendChild(this.element);
			this.element.setAttribute('class', 'show');
			this.element.setAttribute('style', 'position:absolute; top:' + strY + 'left:' + strX  );
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
		var $nodesExist = $('.tooltip');
		dom.setListener({$node:$nodesExist, event:'mouseover', data:objToolTip, listener:objToolTip.startDelay});
		dom.setListener({$node:$nodesExist, event:'mouseout', data:objToolTip, listener:objToolTip.hide});
	};

	var lclInterval = w.setInterval(function(){
		if(d.getElementsByTagName('div').length >= 1){
			w.clearInterval(lclInterval); 
			lclInterval = null;
			main();
		}
	}, 33);

})(window, document, jQuery);