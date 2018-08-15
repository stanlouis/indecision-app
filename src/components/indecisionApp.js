import React, { Component } from 'react';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends Component {
  state = {
    options: ['Option 1', 'Option 2', 'Option 3']
  };
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Options options={this.state.options}/>
      </div>
    );
  }
}
