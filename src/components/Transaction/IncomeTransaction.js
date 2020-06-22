import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

//CSS
import './transaction.css'

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">
        ${incomeTransaction.incomeAmount}
      </span>
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn income"
      >
    <i class="fa">&#xf014;</i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
