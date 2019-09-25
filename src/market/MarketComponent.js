import React, { Component } from 'react';
import {
    Card,
    Grid,
    Image,
    Icon,
    Button
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addProductToCart } from '../actions/index'

import "./market.css"

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: product => dispatch(addProductToCart(product))
    }
}

class ConnectedMarketComponent extends Component {

    render() {
        return (
            <div className="product-grid">
                <Grid columns={3}>
                    {this.props.products.map(product => (
                        <Grid.Column key={product.productId}>
                            <Card >
                                <Image src={process.env.PUBLIC_URL + product.productImage} />
                                <Card.Content>
                                    <Card.Header>{product.productName}</Card.Header>
                                </Card.Content>
                                <Card.Content >
                                    {!this.props.cart.includes(product) ? (
                                        <Button primary
                                            floated="left"
                                            onClick={() => this.props.addProductToCart(product)}>
                                            Add to cart
                                        </Button>) :
                                        (
                                        <Button primary
                                                floated="left"
                                                onClick={() => this.props.history.push('/cart')}>
                                                Go to cart
                                        </Button>)
                                    }
                                    <a>
                                        <Icon name='dollar' floated="right">
                                            {product.productPrice}
                                        </Icon>
                                    </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    ))}

                </Grid>
            </div>
        );
    }
}

const MarketComponent = connect(mapStateToProps, mapDispatchToProps)(ConnectedMarketComponent)

export default MarketComponent