import { useState } from "react";
import styled from "styled-components";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { Card } from "../UI/Card";
import { ExpensesList } from "./ExpensesList";
import { Charts } from "../charts/Charts";
import { Button } from "../UI/Button";

export const Expenses = ({ expenses }) => {
  const [selectValue, setSelectValue] = useState("2024");
  const [sortType, setSortType] = useState("asc");
  const [sortKey, setSortKey] = useState("");

  const selectChangeHandler = (event) => {
    setSelectValue(event.target.value);
  };

  const toggleSortType = () => {
    setSortType((prevSortType) => (prevSortType === "asc" ? "desc" : "asc"));
  };

  const handleSortByDate = () => {
    setSortKey("date");
  };

  const handleSortByTitle = () => {
    setSortKey("title");
  };

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === selectValue
  );

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortKey === "date") {
      return sortType === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    } else if (sortKey === "title") {
      return sortType === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <Card>
      <ExpenseFilter value={selectValue} onChange={selectChangeHandler} />

      <div style={{ display: "flex", justifyContent: "space-between",}}>
        <StyledButton onClick={toggleSortType}>
          {sortType === "asc" ? "По возрастанию" : "По убыванию"}
        </StyledButton>
        <StyledButton onClick={handleSortByDate}>По новизне</StyledButton>
        <StyledButton onClick={handleSortByTitle}>По названию</StyledButton>
      </div>

      <Charts expenses={sortedExpenses} />
      {sortedExpenses.length === 0 ? (
        <h1 style={{ color: "white" }}>No Expenses</h1>
      ) : (
        <ExpensesList expenses={sortedExpenses} />
      )}
    </Card>
  );
};

const StyledButton=styled.button`
  background-color: #fff;
  font-size: 12px;
  font-weight: 600;
  color: #000;
  margin-bottom:10px;
  padding: 10px;
`