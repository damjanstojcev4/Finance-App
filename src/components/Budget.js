import React, { useState } from 'react';
import TransactionList from './TransactionList';

const Budget = () => {
  const initialBudget = 0;
  const initialTransactions = [];

  const [budget, setBudget] = useState(initialBudget);
  const [transaction, setTransaction] = useState('');
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState(initialTransactions);

  const addTransaction = () => {
    if (transaction && amount !== 0) {
      const newTransaction = {
        id: transactions.length + 1,
        description: transaction,
        amount: parseInt(amount),
        date: new Date().toLocaleDateString()
      };
      setTransactions([...transactions, newTransaction]);
      setBudget(budget + parseInt(amount));
      setTransaction('');
      setAmount(0);
    }
  };

  const resetValues = () => {
    setBudget(initialBudget);
    setTransactions(initialTransactions);
  };

  return (
    <div>
      <h2>Overall Budget: {budget}</h2>
      <label htmlFor="budgetInput">Set Initial Budget:</label>
      <input
        id="budgetInput"
        type="number"
        value={budget}
        onChange={(e) => setBudget(parseInt(e.target.value))}
      />
      <input
        type="text"
        placeholder="Description"
        value={transaction}
        onChange={(e) => setTransaction(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addTransaction}>Add Transaction</button>
      <button onClick={resetValues}>Reset Values</button>
      <hr />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Budget;
