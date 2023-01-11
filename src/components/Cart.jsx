import React from 'react';
// import  ReactDOM from 'react-dom';
// import './src/style.css';
// import logo from './logo.svg';

const Cart = () => {
  return(
    <>
        <div className="">
            <h5 className="text-center mt-5">My Cart</h5>
            <div className="row cart-row justify-content-start align-items-center g-2">
                <div className="col-lg-5 cart-item">
                    <h6>Item</h6>
                    <hr className='mt-0'/>
                    <img className="img cart-item-img" src="" alt="item" />
                    <span className='cart-item-title ms-2'>Product Name</span> 
                </div>
                <div className="cart-item-price col-lg-2">
                    <h6>Price</h6>
                    <hr className='mt-0'/>
                </div>
                <div className="cart-item-quantity col-lg-2">
                    <h6>Quantity</h6>
                    <hr className='mt-0'/>
                    <span>
                        <input type="number" className="cart-quantity-input" value=""/>
                    </span>
                </div>
                <div className="cart-item-amount col-lg-3">
                    <h6>Amount</h6>
                    <hr className='mt-0'/>
                    <p className="sub-total">
                        2,000.00
                    </p>
                </div>
            </div>
            <hr />
            <p className="text-end" id="total">Total:<span className='px-2'>1,000.00</span></p>

        </div>
    </>
    
  )
  
}

export default Cart;
