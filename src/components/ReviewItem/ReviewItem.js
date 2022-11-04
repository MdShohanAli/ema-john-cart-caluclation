
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './ReviewItem.css'

const ReviewItem = (props) => {
    const { product, handelRemoveContainer } = props
    const { name, price, shipping, quantity, img } = props.product;
    return (
        <div className='review-Item' >
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}> Product Name
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p>price: <span className='orange-text'>{price}</span> </p>
                    <p><small>Shipping :  {shipping} </small> </p>
                    <p> Quantity {quantity} </p>


                </div>
                <div className="delete-container">
                    <button onClick={() => handelRemoveContainer(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash} ></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;