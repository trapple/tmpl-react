const React = require("react");

const MyElement = React.createClass({
  render(){
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
});


React.render(<MyElement text="hello world!!"/>, document.querySelector("#app"));
