
import { Pie } from "react-chartjs-2";

const DonationPieChart = ({ data }) => {
  // Prepare data for the pie chart
  const chartData = {
    labels: data.map((donation) => donation.category),
    datasets: [
      {
        data: data.map((donation) => donation.price),
        backgroundColor: [
          "#FFD700", // Color for Clothing
          "#32CD32", // Color for Healthcare
          "#FF6347", // Color for Food
          "#4169E1", // Color for Education
          // Add more colors for additional categories if needed
        ],
      },
    ],
  };

  // Define options for the chart
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h2>Donation Distribution</h2>
      <div style={{ maxWidth: "400px" }}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DonationPieChart;
