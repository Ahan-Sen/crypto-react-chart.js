import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

//Chart.defaults.global.legend.display = false;

function Graph({ currencyArr, currencyLabelArr }) {
  return (
    <div style={{ width: "1000px", marginBottom: "100px" }}>
      <Line
        data={{
          labels: currencyLabelArr,
          datasets: [
            {
              label: "Price",
              data: currencyArr,
              backgroundColor: "green",
              borderColor: "yellow",
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                borderColor: "green",
              },
            },
            x: {
              grid: {
                borderColor: "red",
              },
              ticks: {
                display: false,
              },
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    </div>
  );
}

export default Graph;
