import React, { Component } from 'react';
import {
    Grid
} from 'semantic-ui-react'
import ProductCard from './ProductCardComponent'
import { connect } from 'react-redux'

import "./market.css"

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

class ConnectedMarketComponent extends Component {

    isProductInCart(productId) {
        return this.props.products.find((product) => product.productId === productId).isInCart
    }

    render() {
        return (
            <div className="product-grid">
                <Grid columns={3}>
                    {this.props.products.map(product => (
                        <ProductCard product={product}
                                     isInCart={this.isProductInCart(product.productId)}
                                     key={product.productId}
                        />
                    ))}

                </Grid>
            </div>
        );
    }
}

const MarketComponent = connect(mapStateToProps, null)(ConnectedMarketComponent)

export default MarketComponent