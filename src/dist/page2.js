var React = require('react');
var ReactDOM = require('react-dom');

var ele = React.createElement('ul' , {} , 
				React.createElement('li' , {} , 'List Item 1. Page 2'),
				React.createElement('li' , {} , 'List Item 2. Page 2')
				)

ReactDOM.render(ele , document.getElementById('main2'));