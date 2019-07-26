import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import Admin from './admin';

export default withAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    // Redirect to '/admin' after login
    this.props.auth.login('/admin');
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.loggedOut();
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?

      <Admin
          loggedIn = {this.props.loggedIn}
          logout = {this.logout}
      ></Admin>
     : <button onClick={this.login}>Login</button>;
  }
});