import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const config = {
  type: "doughnut",
  data: {
    labels: ["Frontend", "Backend", "Devops"],
    datasets: [
      {
        backgroundColor: ["#CBD5E0", "#E2E8F0", "#EDF2F7"],
        borderColor: ["#FFF"],
        data: [70, 20, 10],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
  },
};

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
      <div style={{ position: "relative", width: "320px", height: "160px" }} className="mt-1">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default TechChart;
