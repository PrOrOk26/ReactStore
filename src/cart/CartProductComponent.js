import React, { Component } from 'react'
import { Icon, Grid, Button, Segment } from 'semantic-ui-react'
import { removeProductFromCart } from '../actions/index'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromCart: productId => dispatch(removeProductFromCart(productId))
    }
}

class ConnectedCartProduct extends Component {

    handleRemove = (productId) => {
        this.props.removeProductFromCart(productId)
    }

    render() {
        const { productId, productName, productPrice } = this.props.product

        return (
            <Grid.Column key={productId}>
                <Segment>
                    <Grid.Column>
                        <Button icon="delete" floated="right" size="tiny" onClick={() => this.handleRemove(productId)}></Button>
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