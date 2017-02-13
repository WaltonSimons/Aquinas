// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

import TitleBarContainer from '../containers/TitleBarContainer';
import LoginFormContainer from '../containers/LoginFormContainer';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <TitleBarContainer
        />
        <LoginFormContainer
        />
      </div>
    );
  }
}
