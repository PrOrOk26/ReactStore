import React, { Component } from 'react'
import { Icon, Grid, Button, Segment } from 'semantic-ui-react'
import { removeProductFromCart } from '../actions/index'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromCart: product => dispatch(removeProductFromCart(product))
    }
}

class ConnectedCartProduct extends Component {

    handleRemove = (product) => {
        this.props.removeProductFromCart(product)
    }

    render() {
        const { productId, productName, productPrice } = this.props.product

        return (
            <Grid.Column key={productId}>
                <Segment>
                    <Grid.Column>
                        <Button icon="delete" floated="right" size="tiny" onClick={() => this.handleRemove(this.props.product)}></Button>
                        {productName}
                    </Grid.Column>
                    <Icon name='dollar' floated="right">
                        {productPrice}
                    </Icon>
                </Segment>
            </Grid.Column>
        );
    }
}

const CartProduct = connect(null, mapDispatchToProps)(ConnectedCartProduct)

export default CartProduct;