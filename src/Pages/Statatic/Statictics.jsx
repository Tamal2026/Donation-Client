
import { Chart } from "react-google-charts";

const Statistics = () => {
  const chartData = [
    ["Category", "Amount"],
    ["My Donation", 500], // Replace with your donation amount
    ["Total Donation", 1000], // Replace with the total donation amount
  ];

  const pieChartOptions = {
    title: "Donation Statistics",
  };

  return (
    <div>
      
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Chart
          chartType="PieChart"
          data={chartData}
          options={pieChartOptions}
          width={"50%"}
          height={"400px"}
        />
        <div style={{ marginLeft: "20px" }}>
        
          
        </div>
      </div>
    </div>
  );
};

export default Statistics;
