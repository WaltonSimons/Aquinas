import React, { Component } from 'react';

import styles from './TitleBar.css';

export default class TitleBar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className={styles.nav_bar}>
        <div className={styles.nav_bar_buttons}>
          <img className={styles.nav_button} onClick={this.props.minimizeButton} src="images/minimize-button.png"/>
          <img className={styles.nav_button} onClick={this.props.closeButton} src="images/close-button.png"/>
        </div>
      </div>
    );
  }
}
