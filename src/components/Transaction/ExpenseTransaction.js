import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

//CSS
import './transaction.css'


const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button
        onClick={() => deleteTransaction(expenseTransaction.id)}
        className="delete-btn expense"
      >
      <i class="fa">&#xf014;</i>
     
      </button>
    </li>
  );
};

export default ExpenseTransaction;
