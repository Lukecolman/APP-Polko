import React from 'react';

const CheckoutTotal = ({ totalProducts, totalPrice }) => {
    return (
        <section className='checkoutTotal-section'>
            <div className='checkoutTotal-text'>Total de productos: {totalProducts}</div>
            <div className='checkoutTotal-totalContainer'>
                <div className='checkoutTotal-text'>Total:</div>
                <div className='checkoutTotal-amount'>${totalPrice}</div>
            </div>
        </section>
    );
};

export default CheckoutTotal;
