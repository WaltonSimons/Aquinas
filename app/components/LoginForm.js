import React, { Component } from 'react';

import styles from './LoginForm.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <form onSubmit={this.props.steamLogin}>
        <input className={styles.text_field} type="text" name="account_name" />
        <input className={styles.text_field} type="password" name="passw" />
        <button type="submit">LOGIN</button>
        <button disabled>CANCEL</button>
      </form>
    );
  }

}
