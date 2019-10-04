import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'

import LoginForm from './LoginForm'
import "./login.css"

class LoginComponent extends Component {
  render() {
    return (
      <div className="login-font">
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 400 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Sign in to your account
            </Header>
            <LoginForm/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}


export default LoginComponent