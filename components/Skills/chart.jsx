import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const config = {
  type: "doughnut",
  data: {
    datasets: [
      {
        backgroundColor: ["#A0AEC0", "#CBD5E0", "#EDF2F7"],
        hoverBackgroundColor: ["#A0AEC0", "#CBD5E0", "#EDF2F7"],
        borderColor: ["#FFF"],
        data: [70, 20, 10],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          //get the concerned dataset
          var dataset = data.datasets[tooltipItem.datasetIndex];
          //get the current items value
          var currentValue = dataset.data[tooltipItem.index];
          return `${currentValue}%`;
        },
      },
    },
  },
};

const Label = (props) => (
  <span title={props.percentage} className="flex flex-row items-center">
    <span className={`${props.color} rounded-full w-2 h-2 mr-2`} />
    {props.title}
  </span>
);

const Legend = () => (
  <div className="mt-3 text-xs flex flex-col justify-center space-y-1">
    <Label title="Frontend" color="bg-gray-500" percentage="70%" />
    <Label title="Backend" color="bg-gray-400" percentage="20%" />
    <Label title="Devops" color="bg-gray-200" percentage="10%" />
  </div>
);

function TechChart() {
  let chartRef = useRef();

  useEffect(() => {
    if (chartRef) {
      chartRef = new Chart(chartRef.current, config);
    }
  });

  return (
    <div className="mt-5">
      <span className="text-base font-sans">Skills usage distribution</span>
      <div className="flex">
        <div style={{ position: "relative", width: "140px", height: "120px" }} className="mt-1 mr-8">
          <canvas ref={chartRef} />
        </div>
        <Legend />
      </div>
    </div>
  );
}

export default TechChart;
