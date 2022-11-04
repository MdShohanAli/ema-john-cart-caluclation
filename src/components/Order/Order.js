import React from 'react';
import useCart from '../../useProduct/useCart';
import useProducts from '../../useProduct/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}></ReviewItem>)
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