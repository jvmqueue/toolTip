var jvm = jvm || {};
jvm.ui = (function(w, d){
	
	var _dom = {
		createToolTip:function(options){
			/* use object so that we caan maintain each tooltip's index */
			/* use the incremented index to append nodeNewContainer id */
			/* we need ids so that we can raise the tooltip relative to a node's id */
			var frag = d.createDocumentFragment();
			this.nodeNewText = d.createTextNode(options.text);
			this.nodeNewContainer = d.createElement('a');
			this.nodeNewArrow = d.createElement('span');
			this.nodeNewArrowText = d.createTextNode(' ');
			this.nodeNewFirstChild = d.createElement('span');			

			this.nodeNewArrow.setAttribute('class', 'tooltipArrow');
			this.nodeNewArrow.appendChild(this.nodeNewArrowText);
			this.nodeNewContainer.setAttribute('class', 'tooltip');
			this.nodeNewFirstChild.appendChild(this.nodeNewArrow);
			this.nodeNewFirstChild.appendChild(this.nodeNewText);
			this.nodeNewContainer.appendChild(this.nodeNewFirstChild);

			frag.appendChild(this.nodeNewContainer);
			return frag;
		}
	};

	return{ // public API
		dom:_dom
	};

})(window, document);