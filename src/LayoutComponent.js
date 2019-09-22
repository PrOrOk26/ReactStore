import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Menu,
  Header,
  Label
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from "react-router"
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    productsInCart: state.cart.length
  }
}

class ConnectedLayoutComponent extends Component {

  render() {

    const { children, history } = this.props

    return (
        <div className="navBar">
            <Menu>
              <Menu.Item>
                <Link to="/market">
                <Header as='h2' icon='shipping fast' content='E-store' />
                </Link>
              </Menu.Item>

              <Menu.Item position="right">

              <Button as='div' labelPosition='right'>
      <Button color="facebook" icon="cart" onClick={() => history.push('/cart')}>
      </Button>
      <Label basic color='blue' pointing='left' size="tiny">
        {this.props.productsInCart}
      </Label>
    </Button>
              </Menu.Item>
            </Menu>
            {children}
        </div>
    )
  }
  }
  
  ConnectedLayoutComponent.propTypes = {
    children: PropTypes.node,
  }

let LayoutComponentWithoutRouter = connect(mapStateToProps)(ConnectedLayoutComponent)
const LayoutComponent = withRouter(LayoutComponentWithoutRouter)

export default LayoutComponent;