import React from 'react';
import useCart from '../../useProduct/useCart';
import useProducts from '../../useProduct/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handelRemoveContainer = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
    }
    return (
        <div>
            <div className="shop-container">
                <div className="review-Item-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handelRemoveContainer={handelRemoveContainer}
                        ></ReviewItem>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} ></Cart>
                </div>

            </div>
        </div>
    );
};

export default Order;