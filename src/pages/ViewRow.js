import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewRow(props) {
  const DeleteRecord = () => {
    let url = "https://studentbackend-5o6t.onrender.com/students/delete-student/";
    console.log(url + props.obj._id);
    axios
      .delete(url + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("deleted successfuly");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr>
      <td>{props.obj.firstName}</td>
      <td>{props.obj.lastName}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.contact}</td>
      <td>{props.obj.parentName}</td>
      <td>{props.obj.parentContact}</td>
      <td>
        <Link to={`/edit-student/${props.obj._id}`}>
          <button>Edit</button>
        </Link>
        <br></br>
        <button onClick={DeleteRecord}>Delete</button>
      </td>
    </tr>
  );
}

export default ViewRow;
