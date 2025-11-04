import React from 'react';
import '../Style/mtnafa.css';
import { GiNunchaku, GiPickOfDestiny } from 'react-icons/gi';
import { SiHungryjacks } from 'react-icons/si';
import { PiCookingPot } from 'react-icons/pi';
import { IoTrendingUp } from 'react-icons/io5';

const MTNAFA = () => {
  return (
    <div className="afa-container">
      <h1 className="afa-title">AFA REG</h1>
      <p className="afa-price">Price: ₵5.00</p>

      <form className="afa-form">
        <h2 className="afa-subtitle">Details for Registration</h2>

        <div className="form-group">
          <label htmlFor="fullname">Full Name *</label>
          <input type="text" id="fullname" name="fullname" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label htmlFor="ghanaCard">Ghana Card ID *</label>
          <input type="text" id="ghanaCard" name="ghanaCard" required />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input type="text" id="location" name="location" required />
        </div>

        <div className="form-footer">
          <label htmlFor="quantity">AFA REG Quantity</label>
          <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />

          <button type="submit" className="afa-button">Add to Cart</button>
        </div>

        <p className="afa-meta">WirelexTech: AFA</p>
        <p className="afa-meta">Category: MTN-AFA</p>
      </form>
    </div>
  );
};

export default MTNAFA;
