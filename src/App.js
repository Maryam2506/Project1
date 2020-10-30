import React from "react";

// Component of this App
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncomeList from "./components/Transaction/IncomeList";
import ExpenseList from "./components/Transaction/ExpenseList";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";

// All Css Added
import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <IncomeList />
          <ExpenseList />
          <AddTransaction />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
