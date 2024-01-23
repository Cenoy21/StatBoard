import "./table.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Table = () => {
  const [tableData, setTableData] = useState([]);

  const fetchTableData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/table");
      setTableData(response.data);
    } catch (e) {
      console.log("Error fetching table data:", e);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
  ];

  return (
    <>
      <div style={{ height: 370, width: "700px" }}>
        <DataGrid rows={tableData} columns={columns} pageSize={5} />
      </div>
    </>
  );
};

export default Table;
