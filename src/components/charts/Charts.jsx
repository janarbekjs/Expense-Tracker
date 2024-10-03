import { ChartBar } from "./ChartBar";
import "./Charts.css";

export const Charts = ({ expenses }) => {
  const maximumPrice = 3000;
  const month = [
    {
      label: "Январь",
      currentPrice: 300,
    },
    {
      label: "Февраль",
      currentPrice: 150,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апрель",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Августь",
      currentPrice: 0,
    },
    {
      label: "Сентябрь",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];

  expenses.forEach((item) => {
    const filteredPrice = item.date.getMonth();
    month[filteredPrice].currentPrice += item.amount;
  });

  return (
    <div className="chart">
      {month.map((item) => (
        <ChartBar key={item.id} {...item} maximumPrice={maximumPrice} />
      ))}
    </div>
  );
};
