import { Button } from "../UI/Button";
import "./ExpenseFilter.css";

export const ExpenseFilter = ({ onChange, value }) => {
  return (
    <div className="expenses-filter">
      {/* <Button /> */}
      <div className="expenses-filter__control">
        <label htmlFor="filterId" className="expense-filter_label">
          Фильтр по году
        </label>

        <select
          id="filterId"
          className="expense-filter_select"
          onChange={onChange}
          value={value}
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};
