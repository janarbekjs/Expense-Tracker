import "./ChartBar.css";

export const ChartBar = ({ maximumPrice, label, currentPrice }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;

  return (
    <div className="chart-container">
      <div className="chart_list">
        <div className="chart-bar" style={{ height: `${fillHeight}%` }}></div>
      </div>
      <p className="chart-label">{label}</p>
    </div>
  );
};
