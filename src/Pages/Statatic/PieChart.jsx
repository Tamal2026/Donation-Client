import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const DonationChart = () => {
  const initialData = [
    {
      id: 1,
      title: "Cloth Donation For everyone",
      titleColor: "#FF1493",
      description:
        "Donate gently used clothes to those in need. Your clothing donations can make a significant difference in the lives of individuals and families facing hardship. Whether it's warm winter coats, professional attire for job seekers, or everyday clothing for children, your generosity can provide comfort and dignity to those less fortunate. Join us in our mission to clothe the world with kindness.",
      image: "https://i.ibb.co/NntY77W/donate-clothes-here.jpg",
      price: 0,
      bgColor: "#FFD1DC",
      category: "Clothing",
    },
    // ... (other items)
  ];

  const [data, setData] = useState(initialData);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const totalDonated = data.reduce((acc, item) => acc + item.price, 0);
    const remainingPercentage = 100 - totalDonated;

    if (remainingPercentage >= 0) {
      const updatedChartData = {
        labels: data.map((item) => item.title),
        datasets: [
          {
            data: data.map((item) => item.price),
            backgroundColor: data.map((item) => item.titleColor),
          },
          {
            data: [remainingPercentage],
            backgroundColor: ["#CCCCCC"], // Color for remaining percentage
          },
        ],
      };

      setChartData(updatedChartData);
    }
  }, [data]);

  const handleDonateClick = (item) => {
    // Calculate a random donation amount (for demonstration purposes)
    const donationAmount = Math.floor(Math.random() * 10) + 1;

    // Update the item's price and the chart data
    const updatedData = [...data];
    const itemIndex = updatedData.findIndex((d) => d.id === item.id);

    if (itemIndex !== -1) {
      updatedData[itemIndex].price += donationAmount;
      setData(updatedData);
    }
  };

  return (
    <div>
      <h2>Donation Chart</h2>
      <div className="chart-container">
        <Pie data={chartData} />
      </div>
      <div className="item-list">
        {data.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleDonateClick(item)}>Donate</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationChart;
