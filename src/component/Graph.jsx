import { useState } from "react";
import Chart from "react-apexcharts";
import { monthlyData, weeklyData, annualData } from "../assets/data";

const Graph = () => {
  const [timeframe, setTimeframe] = useState("monthly");

  const getFilteredData = () => {
    switch (timeframe) {
      case "weekly":
        return weeklyData;
      case "monthly":
        return monthlyData;
      case "annually":
        return annualData;
      default:
        return monthlyData;
    }
  };

  const filteredData = getFilteredData();

  const chartData = {
    series: [
      {
        name: "Total",
        data: filteredData.map((item) => item.total),
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        animations: {
          enabled: false,
        },
      },
      plotOptions: {
        area: {
          fillTo: "origin",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["red"],
      },
      xaxis: {
        categories: filteredData.map(
          (item) => item.month || item.week || item.year
        ),
      },
      yaxis: {
        title: {
          // text: 'Total'
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
          stops: [1, 90, 100],
          colorStops: [
            {
              offset: 0,
              color: "#FF4560",
              opacity: 0.7,
            },
            {
              offset: 90,
              color: "#FF4560",
              opacity: 0.1,
            },
          ],
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " Tickets Sold";
          },
        },
      },
    },
  };

  return (
    <>
      <h1 className="font-bold text-left p-2 mt-2">Recent Ticket</h1>
      <div className="p-2 h-[75%] bg-white rounded mr-2 w-[98%]">
        <div className="flex justify-end">
          <select
            onChange={(e) => setTimeframe(e.target.value)}
            value={timeframe}
            className="mb-4 p-2 border border-gray-300 rounded"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="annually">Annually</option>
          </select>
        </div>

        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
    </>
  );
};

export default Graph;
