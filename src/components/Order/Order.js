import React from 'react';
import useCart from '../../useProduct/useCart';
import useProducts from '../../useProduct/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useNavigate } from 'react-router-dom';
import './Order.css'

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handelRemoveContainer = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id);
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
                    <Cart cart={cart}>

                        <button onClick={() => navigate('/inventory')} >Process To Checkout</button>

                    </Cart>
                </div>

            </div>
        </div>
    );
};

export default Order;