import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";

const Reports = () => {
  const [report, setReport] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reports")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReport(data);
      });
  }, []);
  let headers = [
    { label: "id", key: "id" },
    { label: "diid", key: "diid" },
    { label: "Mail", key: "Mail" },
    { label: "Data_Status", key: "Data_Status" },
    { label: "Date", key: "Date" },
    { label: "BAs Name", key: "BAs Name" },
    { label: "Micro_Site_Log_In_ID", key: "Micro_Site_Log_In_ID" },
    { label: "Region", key: "Region" },
    { label: "Area", key: "Area" },
    { label: "Territory", key: "Territory" },
    { label: "c_name", key: "c_name" },
    { label: "Consumer_No", key: "Consumer_No" },
    { label: "Age", key: "Age" },
    { label: "EASOccupation", key: "EASOccupation" },
    { label: "Outlet_Code", key: "Outlet_Code" },
    { label: "Outlet_Name", key: "Outlet_Name" },
    { label: "Current_Brand", key: "Current_Brand" },
    { label: "watched_av", key: "watched_av" },
    { label: "How_did_the_Trial_end", key: "How_did_the_Trial_end" },
    { label: "Sales_Point", key: "Sales_Point" },
    { label: "Scope", key: "Scope" },
    { label: "for_d", key: "for_d" },
    { label: "agent", key: "agent" },
    { label: "agent_id", key: "agent_id" },
    { label: "q1", key: "answer1" },
    { label: "q2", key: "answer2" },
    { label: "q3", key: "answer3" },
    { label: "q4", key: "answer4" },
    { label: "q4.1", key: "answer4dot1" },
    { label: "q5", key: "answer5" },
    { label: "q5.1", key: "answer5dot1" },
    { label: "q5.2", key: "answer5dot2" },
    { label: "q5.3", key: "answer5dot3" },
    { label: "q6", key: "answer6" },
    { label: "q7", key: "answer7" },
    { label: "q8", key: "answer8" },
  ];
  return (
    <div className="text-center mt-5">
      <div>
        <h4>Download Report</h4>
      </div>
      <div style={{ display: report.length > 0 ? "block" : "none" }}>
        <button className="btn btn-danger">
        <CSVLink
          headers={headers}
          title="Export data to CSV"
          filename={"FIFO_CRM.csv"}
          data={report}
        >
          Download
        </CSVLink>
        </button>
      </div>
    </div>
  );
};

export default Reports;
