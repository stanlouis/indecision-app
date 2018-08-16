import React, { Component } from 'react';
import Header from './Header';
import Options from './Options';
import Action from './Action';

export default class IndecisionApp extends Component {
  state = {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
    this.setState(() => ({ selectedOption: option }));
  };

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
      </div>
    );
  }
}
