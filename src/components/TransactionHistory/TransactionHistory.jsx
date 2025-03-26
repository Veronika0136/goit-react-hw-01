import React from 'react';
import s from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction_table}>
      <thead className={s.transaction_thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.transaction_tr} key={id}>
            <td className={s.transaction_td}>{type}</td>
            <td className={s.transaction_td}>{amount}</td>
            <td className={s.transaction_td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
