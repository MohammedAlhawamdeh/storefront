import React from 'react';

import { connect } from 'react-redux';

const Products = props => {

    const productList = props.products.filter(product => product.category === props.active);
    return (
        <>
            {
                productList.map(product => (
                    <div>
                        <h3>{product.name}</h3>
                        <h5>{product.description}</h5>
                        <button>Add to Cart</button>
                    </div>
                ))
            }
            </>
    )
}

const mapStateToProps = store => ({
    products: store.productReducer.products,
    active: store.categoryReducer.activeCategory,
});

export default connect(mapStateToProps)(Products);