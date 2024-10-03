import { ExpenseItem } from "./ExpenseItem";


export const ExpensesList = ({ expenses = [] }) => {
  return (
    <ul>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
