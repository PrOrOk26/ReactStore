import React, { Component } from 'react';
import {
    Grid
} from 'semantic-ui-react'
import ProductCard from './ProductCardComponent'
import { connect } from 'react-redux'

import "./market.css"

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    }
}

class ConnectedMarketComponent extends Component {

    render() {
        return (
            <div className="product-grid">
                <Grid columns={3}>
                    {this.props.products.map(product => (
                        <Grid.Column key={product.productId}>
                            <ProductCard product={product}
                                isInCart={this.props.cart.includes(product)}
                            />
                        </Grid.Column>
                    ))}

                </Grid>
            </div>
        );
    }
}

const MarketComponent = connect(mapStateToProps, null)(ConnectedMarketComponent)

export default MarketComponent