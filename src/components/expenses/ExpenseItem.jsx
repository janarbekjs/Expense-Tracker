import { Button } from "../UI/Button";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import styled from "styled-components";

export const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li className="li-style">
      <div className="date-title-div">
        <ExpenseDate date={date} />
        <p className="title">{title}</p>
      </div>

      <div>
        <p className="amount">$ {amount}</p>
        <StyledBtn>Delete</StyledBtn>
      </div>
    </li>
  );
};

const StyledBtn=styled.button`
  margin: 10px 0 0 25px;
`