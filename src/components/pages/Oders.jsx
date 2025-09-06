import React from 'react';
import '../Style/myorder.css';

const MyOrders = () => {
  return (
    <div className="myorders-container">
      <div className="myorders-header">
        <input type="text" placeholder="Search phone number" className="search-input" />
        <button className="export-button">Export CSV</button>
      </div>

      <div className="myorders-table">
        <table>
          <thead>
            <tr>
              <th>OrderID</th>
              <th>Number</th>
              <th>Status</th>
              <th>Product</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample row */}
            <tr>
              <td>3245</td>
              <td>0541234567</td>
              <td>Completed</td>
              <td>MTN Data</td>
              <td>2025-06-15</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="report-section">
        <input type="text" placeholder="Enter OrderID: eg. 3245" className="orderid-input" />
        <button className="submit-report">Submit Report</button>
      </div>
    </div>
  );
};

export default MyOrders;