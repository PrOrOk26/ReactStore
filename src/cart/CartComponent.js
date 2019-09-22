import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeProductFromCart } from '../actions/index'
import { Icon, Grid, Button, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromCart: product => dispatch(removeProductFromCart(product))
    }
}

class ConnectedCartComponent extends Component {

    handleRemove = (product) => {
        this.props.removeProductFromCart(product)
    }
    
    render() {

        const cart = this.props.cart

        return (
            <div>
                {
                cart.length !== 0 
                ? (
                <Grid columns={1}>
                    <h2>Cart</h2>
                {cart.map(product => (
                    <Grid.Column key={product.productId}>
                    <Segment>
                        <Grid.Column>
                        <Button icon="delete" floated="right" size="tiny" onClick={() => this.handleRemove(product)}></Button>
                        {product.productName}
                        </Grid.Column>
                        <Icon name='dollar' floated="right">
                            {product.productPrice}
                        </Icon>
                    </Segment>
                    </Grid.Column>
                ))}
                </Grid> )
                : (
                    <div>
                    <h2>Nothing added to the cart</h2>
                    <p>Add some at the <Link to="/market">market</Link> <Icon name="arrow alternate circle right outline"></Icon></p>
                    </div>
                )
                }
            </div>
        )
    }
}

const CartComponent = connect(mapStateToProps, mapDispatchToProps)(ConnectedCartComponent)

export default CartComponent;