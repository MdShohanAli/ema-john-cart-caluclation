import React from 'react';

const ReviewItem = (props) => {
    const { name, price, shipping, quantity } = props.product;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default ReviewItem;