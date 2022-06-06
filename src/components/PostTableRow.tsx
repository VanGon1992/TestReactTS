import React from "react";
import "./PostTableRowStyles.css";

export default function PostTableRow({ elem, deleteData }) {
  let { id, title, body } = elem;
  return (
    <div className="postContainer">
      <span className="postContentTitle">{title}</span>
      <span>{body}</span>
      <button className="postButton" onClick={() => deleteData(id)}>
        Delete
      </button>
    </div>
  );
}
