import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';

var steam = require('steam');

export default class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steamClient: null,
      steamUser: null
    };
  };

  steamLogin(event, value) {
    event.preventDefault();
    this.setState({
      steamClient: new steam.SteamClient()
    }, () => {
      this.setState({
        steamUser: new steam.SteamUser(this.state.steamClient)
      }, () => {
        this.state.steamClient.connect();

        this.state.steamClient.on('connected', () => {
          this.state.steamUser.logOn({
            account_name: event.target.elements.account_name.value,
            password: event.target.elements.passw.value
          });
        });

        this.state.steamClient.on('logOnResponse', () => {

        });
      });
    });

    return false;
  }

  render() {
    return(
      <LoginForm
        steamLogin={this.steamLogin.bind(this)}
      />
    );
  }
}
