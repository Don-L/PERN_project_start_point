const React = require('react');

const StarterComponent = React.createClass({

  render: function(){
    const nodes = this.state.data.map(function(item) {
        return (
          <p key={item.id}>Item {item.id}</p>
        );
      });
      return (
        <div>
          {nodes}
        </div>
      );
  },

  getInitialState: function () {
    return {
      data: []
    };
  },

  loadResourcesFromServer: function() {
    let tableURL = this.props.tableURL;
    let request = new XMLHttpRequest();
    request.open("GET", tableURL);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
      if(request.status === 200) {
        let data = JSON.parse(request.responseText);
        this.setState({data: data.data});
      }
    }.bind(this);
    request.send(null);
  },

  componentDidMount: function() {
    this.loadResourcesFromServer();
  }

});

module.exports = StarterComponent;
