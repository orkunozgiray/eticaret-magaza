import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Product = ({
    documentID,
    productThumbnail, 
    productName, 
    productPrice
}) => {
    if (!documentID || !productThumbnail || !productName || 
        typeof productPrice === 'undefined') return null;

    const configAddToCartButton = {
        type: 'button'
    };   

    return (
        <div className="product">
            <div className="thumb">
                <Link to={`/product/${documentID}`}>
                    <img src={productThumbnail} alt={productName} />
                </Link>
            </div>
            <div className="details">
                <ul>
                    <li>
                        <span className="name">
                            <Link to={`/product/${documentID}`}>
                                {productName} 
                            </Link>
                        </span>
                    </li>
                    <li>
                        <span className="price">
                            ${productPrice}
                        </span>
                    </li>
                    <li>
                        <div className="addToCart">
                            <Button {...configAddToCartButton}>
                                Add to Cart
                            </Button>
                        </div>   
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Product;
