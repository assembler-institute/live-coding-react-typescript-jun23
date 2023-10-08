import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import './checkout.css';

const CheckoutForm = () => {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  })

  const { firstName, lastName, email, address, city, state, zip } = form;

  const handleChange = useCallback((e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }, [form])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form)
  }

  return (
    <div className="cart-items">
      <span className="cart-items-title">Checkout</span>
      <form onSubmit={handleSubmit}>
        <div className="sidebar-product">
          <div className="sidebar-product-details">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                className="sidebar-form-control"
                id="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="sidebar-form-control"
                id="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                className="sidebar-form-control"
                id="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                className="sidebar-form-control"
                id="address"
                value={address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                className="sidebar-form-control"
                id="city"
                value={city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                className="sidebar-form-control"
                id="state"
                value={state}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                name="zip"
                className="sidebar-form-control"
                id="zip"
                value={zip}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="cart-items-btn">Submit</button>
          </div>
        </div>
        <div className="sidebar-container-flex">
          <div className="sidebar-subtotal">
            <span className="sidebar-large-text">Order Subtotal</span>
            {/* Replace 'totalPrice.toFixed(2)' with the appropriate variable */}
            <span className="sidebar-large-text">{/*totalPrice.toFixed(2)*/}€</span>
          </div>
          <span className="sidebar-small-text">Delivery time 10-14 working days.</span>
          <div className="sidebar-btn-bottom">
            <Link to="/checkout" className="cart-items-btn pointer">CONTINUE TO CHECKOUT</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm;