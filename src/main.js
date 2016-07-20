var React = require('react');
var ReactDOM = require('react-dom');
require('./style.css');

var element = React.createElement('ul' , {} , 
				React.createElement('li' , {} , "LIST ITEM 2"),
				React.createElement('li' , {} , "LIST ITEM 2"),
				React.createElement('li' , {} , "LIST ITEM 2")
			);

ReactDOM.render(element , document.getElementById('main'));
