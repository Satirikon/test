import React, { Component } from 'react';

class Content extends Component {
  state = {
  num1: 14,
      num2: 27
  };

  constructor(props) {
  super (props);
  this.showAlert = this.showAlert.bind(this);
  }
  showAlert() {
    const {text} = this.props;
    const {num1,num2} = this.state;
      alert(` ${text} : ${num1}  `);
  };
  render() {
    return (

          <a onClick={this.showAlert}>
            ololo123
          </a>
    );
  }
}

export default Content;
