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
    options: {
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map((data) => {
              sum += data;
            });
            let percentage = ((value * 100) / sum).toFixed(2) + "%";
            return percentage;
          },
          color: "#fff",
        },
      },
      title: {
        display: true,
        text: "Custom Chart Title",
      },
    },
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
    <div style={{ position: "relative", maxWidth: "320px", height: "160px" }} className="mt-1">
      <canvas ref={chartRef} />
    </div>
  );
}

export default TechChart;
