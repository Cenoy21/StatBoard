import "./graph.css";
import { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import axios from "axios";

const Graph = () => {
  const [graphData, setGraphData] = useState([]);

  const fetchGraphData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/graph");
      setGraphData(response.data);
    } catch (e) {
      console.error("Error fetching Graph data:", e);
    }
  };

  useEffect(() => {
    fetchGraphData();
  }, []);

  const xData = graphData.map((item) => item.x);
  const data = graphData.map((item) => item.y);

  return (
    <>
      <LineChart
        xAxis={[{ data: xData, scaleType: "point", labelRotate: -45 }]}
        series={[{ data, connectNulls: true }]}
        height={350}
        width={700}
      />
    </>
  );
};

export default Graph;
