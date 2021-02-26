import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0)
    let shippingCost = 0;
    if(total > 35){
        shippingCost = 0;
    }
    else if(total > 15){
        shippingCost = 4.99;
    }
    else if(total >0){
        shippingCost = 12.99;
    }

    const formatNumber = num => {
        const formattedNumber = num.toFixed(2);
        return Number(formattedNumber);
    }

    const tax = total/10;
    return (
        <div>
            <h3>Order Summary:</h3>
            <small>
                <p>Product Price: {total}</p>
                <p>Items Ordered: {cart.length}</p>
                <p>Shipping cost: ${formatNumber(shippingCost)}</p>
                <p>Tax + VAT: {formatNumber(tax)}</p>
                <p>Total price: ${formatNumber(total + shippingCost + tax)}</p>
            </small>
        </div>
    );
};

export default Cart;