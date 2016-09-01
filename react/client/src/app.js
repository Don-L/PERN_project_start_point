var React = require('react');
var ReactDOM = require('react-dom');
var StarterComponent = require('./components/StarterComponent.jsx');

window.onload = function(){
  ReactDOM.render(
    <StarterComponent tableURL="http://localhost:3000/table_name"
    />,
    document.getElementById('app')
  );
}
