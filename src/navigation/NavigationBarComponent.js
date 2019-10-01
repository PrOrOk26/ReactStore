import React, { Component } from 'react'
import SearchBar from './SearchBarComponent'

import { connect } from 'react-redux'
import { withRouter } from "react-router"
import { Link } from 'react-router-dom'

import { 
  Navbar, 
  Nav
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



class ConnectedNavigationBarComponent extends Component {

    handleLogOut() {
        window.localStorage.removeItem("isLoggedIn")
        this.props.history.push('/login')
    }

    render() {

        const history = this.props.history

        return (
            <Navbar bg="light" expand="lg">
                <Link to="/market">
                    <Header as='h2' icon='shipping fast' content='E-store' />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <SearchBar/>
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

        );
    }
}


const NavigationBar = withRouter(connect(mapStateToProps)(ConnectedNavigationBarComponent))

export default NavigationBar;