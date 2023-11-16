import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import ViewRow from "./ViewRow";
import "../components/ViewStyles.css";

function ViewTable() {
  const [students, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("https://studentbackend-5o6t.onrender.com/students")
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const TableItems = () => {
    return students.map((student, i) => {
      return <ViewRow obj={student} key={i} />;
    });
  };

  return (
    <Layout>
      <h3>Student Record</h3>
      {/* {TableItems()} */}
      <table className="viewtable">
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Parent Name</th>
          <th>Parent Contact</th>
          <th>Options</th>
        </thead>
        <tbody id="tbody">{TableItems()}</tbody>
      </table>
    </Layout>
  );
}

export default ViewTable;
