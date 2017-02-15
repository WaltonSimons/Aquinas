import React, { Component } from 'react';

import styles from './LoginForm.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <input className={styles.text_field} type="text" name="Account-Name" />
        <input className={styles.text_field} type="password" name="Password" />
        <button>LOGIN</button>
        <button disabled>CANCEL</button>
      </div>
    );
  }

}
