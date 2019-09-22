import React, { Component } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'


class LoginForm extends Component {

  state = {
    login: "",
    password: "",
    errors: {
      login: "",
      password: ""
    }
  }

  validateForm = (errors) => {
    let valid = true;
    if(this.state.login.length === 0 || this.state.password.length === 0)
      valid = false;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
  
    switch (name) {
      case 'login': 
        errors.login = 
          value.length < 8
            ? 'Login must be 8 characters or longer'
            : '';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters or longer'
            : '';
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.validateForm(this.state.errors)) {
      this.setState({redirect: true})

      window.localStorage.setItem('isLoggedIn', JSON.stringify({login: this.state.login}))
      
      this.props.history.push(`/market`)
    }
  }

  setLoginError = () => {
    if(this.state.errors.login)
      return { content: 'Login must contain at least 8 characters' }
    else 
      return false
  }

  setPasswordError = () => {
    if(this.state.errors.password)
      return { content: 'Password must contain at least 8 characters' }
    else 
      return false
  }

  render() {

    return (
      <div>
        <Form size='large'
            onSubmit={this.handleSubmit}>
      <Segment stacked>
        <Form.Input 
          fluid 
          icon='user' 
          iconPosition='left' 
          placeholder='Login'
          name='login'
          onChange={this.handleChange} 
          error={this.setLoginError()}
        />
        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          name='password'
          type='password'
          onChange={this.handleChange}
          error={this.setPasswordError()}
        />
  
        <Button color='teal' fluid size='large'>
          Submit
        </Button>
      </Segment>
      </Form>
      </div>
      
    );
  }
} 
    

export default LoginForm;