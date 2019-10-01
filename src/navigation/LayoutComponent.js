import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router"
import { Link } from 'react-router-dom'

import { 
  Navbar, 
  Nav, 
  Form, 
  FormControl 
} from 'react-bootstrap'
import {
  Button,
  Header,
  Label
} from 'semantic-ui-react'

import './navigation.css'

const mapStateToProps = (state) => {
  return {
    productsInCart: state.cart.length
  }
}

class ConnectedLayoutComponent extends Component {

  handleLogOut() {
    window.localStorage.removeItem("isLoggedIn")
    this.props.history.push('/login')
  }

  render() {

    const { children, history } = this.props

    return (
      <div>

        <Navbar bg="light" expand="lg" className="navBar">
          <Link to="/market">
            <Header as='h2' icon='shipping fast' content='E-store' />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form inline position="left">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button style={{ marginRight: "5px" }} onClick={() => this.handleLogOut()}>Log out</Button>
            <Button as='div' labelPosition='right'>
              <Button color="facebook" icon="cart" onClick={() => history.push('/cart')}>
              </Button>
              <Label basic color='blue' pointing='left' size="tiny">
                {this.props.productsInCart}
              </Label>
            </Button>
          </Navbar.Collapse>
        </Navbar>
        {children}
      </div>
    )
  }
}

ConnectedLayoutComponent.propTypes = {
  children: PropTypes.node,
}

const LayoutComponent = withRouter(connect(mapStateToProps)(ConnectedLayoutComponent))

export default LayoutComponent;