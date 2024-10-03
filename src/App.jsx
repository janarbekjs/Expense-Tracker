import { useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import { Expenses } from "./components/expenses/Expenses";
import { Login } from "./components/auth/Login";

const DYMMY_EXPENSES = [
  {
    id: "e1",
    title: 'Hello I"m from 2024',
    amount: 200,
    date: new Date(),
  },
  {
    id: "e2",
    amount: 200,

    title: 'Hello I"m from 2023',
    date: new Date("21.09.2023"),
  },
];

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isForm, setIsForm] = useState(false);

  const getNewExpenses = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const hendleLoginUser = (data) => {
    if (data.password && data.email) {
      setIsForm(true);
    } else {
      setIsForm(false);
    }
  };

  return (
    <div className="App">
      {isForm ? (
        <>
          <NewExpense onNewExpenses={getNewExpenses} />
          <Expenses expenses={expenses} />
        </>
      ) : (
        <Login onLoginUser={hendleLoginUser} />
      )}
    </div>
  );
}

export default App;
