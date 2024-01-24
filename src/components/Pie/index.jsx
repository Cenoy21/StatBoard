import "./pie.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { useState, useEffect } from "react";
import axios from "axios";

const Pie = () => {
  const [pieData, setPieData] = useState([]);

  const fetchPieData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/pie-chart");
      setPieData(response.data);
    } catch (e) {
      console.error("Error fetching pie chart data:", e);
    }
  };

  useEffect(() => {
    fetchPieData();
  }, []);

  return (
    <>
      <PieChart
        colors={[
          "rgb(85, 139, 85)",
          "rgb(150, 216, 150)",
          "rgb(216, 246, 216)",
        ]}
        series={[
          {
            data: pieData.map((item, index) => ({
              id: index,
              value: item.value,
              label: item.label,
            })),
          },
        ]}
        width={400}
        height={200}
      />
    </>
  );
};

export default Pie;
