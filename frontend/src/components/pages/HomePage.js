import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../common/Product'
import products from '../../dataSample/products'

const HomePage = () => {
    return (
        <div className="familand-homepage">
            <h1 className="mt-3">Latest Products</h1>
            <Row>
                {
                    products.map((product) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HomePage
