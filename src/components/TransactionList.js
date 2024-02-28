import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <span>{transaction.date} :</span>
            <span>{transaction.description}</span>
            <span>{transaction.amount > 0 ? ` +${transaction.amount}` : ` -${Math.abs(transaction.amount)}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
