import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

function TechChart() {
  let chartRef = useRef();

  useEffect(() => {
    if (chartRef) {
      chartRef = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Frontend", "Backend", "Devops"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: ["#CBD5E0", "#E2E8F0", "#EDF2F7"],
              borderColor: ["#FFF"],
              data: [70, 20, 10],
            },
          ],
          options: {
            responsive: false,
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 50,
                bottom: 0,
              },
            },
            title: {
              display: true,
              text: "Custom Chart Title",
            },
          },
        },
      });
    }
  });
  return (
    <div className="relative w-full h-24">
      <canvas ref={chartRef} />
    </div>
  );
}

export default TechChart;
