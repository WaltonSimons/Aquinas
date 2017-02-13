import React, { Component } from 'react';

import TitleBar from '../components/TitleBar';

const remote = require('electron').remote;

export default class TitleBarContainer extends Component {
  constructor(props) {
    super(props);
  };

  minimizeButton() {
    var window = remote.getCurrentWindow();
    window.minimize();
  }

  maximizeButton() {

  }

  closeButton(){
    var window = remote.getCurrentWindow();
    window.close();
  }

  render() {
    return (
      <TitleBar
        minimizeButton={this.minimizeButton.bind(this)}
        maximizeButton={this.maximizeButton.bind(this)}
        closeButton={this.closeButton.bind(this)}
      />
    );
  }
}
