import React from 'react';
import '../Style/TopUp.css';

const TopUp = () => {
  return (
    <div className="topup-container">
      <div className="topup-card">
        <h2>Self Top-up</h2>
        <label htmlFor="amount">Enter Amount (GH₵):</label>
        <input type="number" id="amount" placeholder="e.g., 50" className="topup-input" />

        <p className="instruction">Click on "I've completed this payment" when done.</p>
        <button className="topup-button">Top Up Wallet Now</button>
      </div>

      <div className="manual-topup">
        <h3>Manual Wallet Top up</h3>
        <p><strong>📱 Number:</strong>0242975483</p>
        <p><strong>👤 Name:</strong>Felix Owusu</p>
        <p><strong>💬 Reference:</strong> Use your username as the payment reference</p>
        <p><strong>💵 Minimum Deposit:</strong> GH₵10</p>
        <p className="note">
          Once payment is made, your wallet will be credited after confirmation. Ensure the reference matches your username to avoid delays.
        </p>
        <a href="#" className="report-delay">📩 Report Top-Up Delay</a>
      </div>
    </div>
  );
};

export default TopUp;