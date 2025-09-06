// src/components/pages/Support.jsx
import React from 'react';
import '../Style/Support.css';

const Support = () => {
  return (
    <div className="support-container">
      <h2>Contact Support</h2>
      <p className="support-subtext">We’re here to help. Please fill out the form below and we’ll get back to you shortly.</p>

      <form className="support-form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email address" />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder="What’s your issue about?" />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" placeholder="Describe your issue here..."></textarea>

        <button type="submit">Submit Request</button>
      </form>

      <div className="support-contact-info">
        <h3>Other ways to reach us</h3>
        <p>📧 Email: <a href="mailto:support@example.com">support@example.com</a></p>
        <p>📞 Phone: +233 242 975 483</p>
        <p>⏰ Support Hours: Mon - Fri, 9 AM - 5 PM</p>
      </div>
    </div>
  );
};

export default Support;
