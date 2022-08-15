import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./style.module.scss";
const data = {
  labels: [19, 26, 29, 3, 7, 12, 15, 18],

  datasets: [
    {
      label: "",
      data: [5, 100, 60, 300, 80, 200, 70, 300],
      background: "linear-gradient(0deg, #BABCDF -13.36%, #7C7FC2 86.64%)",
      borderColor: "#7C7FC2",
    },
  ],
};
const LineChart = () => {
  return (
    <div style={{ marginTop: 110 }} className={styles.chart}>
      <Line data={data} legend={false} style={{ width: "300px !important" }} />
    </div>
  );
};

export default LineChart;
