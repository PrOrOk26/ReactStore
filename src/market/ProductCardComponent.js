import React, { Component } from 'react';
import {
    Card,
    Image,
    Icon,
    Button,
    Grid
} from 'semantic-ui-react'
import { addProductToCart } from '../actions/index'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

import './market.css'

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: product => dispatch(addProductToCart(product))
    }
}

class ConnectedProductCard extends Component {



    render() {
        const product = this.props.product

        return (
            <Grid.Column>
                <Card >
                    <Image src={process.env.PUBLIC_URL + product.productImage} />
                    <Card.Content>
                        <Card.Header>{product.productName}</Card.Header>
                    </Card.Content>
                    <div className="card-actions-container">
                        {!this.props.isInCart ? (
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
                        <div className="product-price">
                            <Icon name='dollar'>
                            </Icon>
                            {product.productPrice}
                        </div>
                    </div>
                </Card>
            </Grid.Column>
        );
    }
}

const ProductCard = withRouter(connect(null, mapDispatchToProps)(ConnectedProductCard))

export default ProductCard;