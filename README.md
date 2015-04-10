<h1>Tooltip in Development</h1> 
<p>Using Tooltip as an example to show use of flyweight pattern</p>
<p><a href="http://jvmqueue.com//toolTip/site/">Live URL</a></p>
<p><a href="http://jvmqueue.com//toolTip/site/doc/">jsDoc URL</a></p>
<h2>Current State</h2>
<p>This page in development March 2015.</p>
<p>Using, but not limited to:</p>
<ul>
	<li>Primitive JavaScript</li>
	<li>Object oriented JavaScript</li>
	<li>jQuery</li>
	<li>CSS3</li>	
	<li>Hash Maps</li>
	<li>Grunt</li>
</ul>
<h3>Stategies and Techniques</h3>
 <ul>
<ul>
	<li>Interfaces [will be implemented during future development stages]</li>
	<li>Factory Pattern [will be implemented during future development stages]</li>	
	<li>Object Instances to store data for unique objects</li>
	<li>CSS3 for presentation and use for JavaScript node manipulation, JS only sets CSS classes</li>
	<li>jQuery for DOM access</li>
	<li>setInterval used to wait for DOM available. This is optimization, avoiding the use of jQuery wait for DOM</li>
	<li>Grunt for CSS lint, JS Lint, and jsDoc</li>
</ul>
</ul>
<h4>Architecture</h4>
<div>
	<pre>
		<code>
			├── site
			│   ├── html resources
			│   ├── styles
			│   │   └── CSS resources
			│   ├── scripts
			│   │     └── JS resources
			│   │     └── base
			│   │         └── jquery-1.11.2.js
			│   ├── images
			│   │     └── resources
			│   │
		</code>
	</pre>
</div>


 
