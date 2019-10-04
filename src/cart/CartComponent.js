import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import CardComponent from './CartProductComponent'

import './cart.css'


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

class ConnectedCartComponent extends Component {

    render() {

        const cart = this.props.cart

        return (
            <div className="container">
                <h1>Cart</h1>
                {
                    cart.length !== 0
                        ? (
                            <Grid columns={1}>
                                {cart.map(product => <CardComponent product={product} key={product.productId}/>)}
                            </Grid>)
                        : (
                            <Fragment>
                                <h2>Nothing added to the cart</h2>
                                <p>Add some at the <Link to="/market">market</Link> <Icon name="arrow alternate circle right outline"></Icon></p>
                            </Fragment>
                        )
                }
            </div>
        )
    }
}

const CartComponent = connect(mapStateToProps, null)(ConnectedCartComponent)

export default CartComponent;