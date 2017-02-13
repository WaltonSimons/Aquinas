import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';

export default class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <LoginForm
      />
    );
  }
}
