import React from 'react';
// import s from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invoice</td>
            <td>125</td>
            <td>USD</td>
          </tr>
          <tr>
            <td>Withdrawal</td>
            <td>85</td>
            <td>USD</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
