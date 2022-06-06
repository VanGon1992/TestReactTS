import React from "react";
import PostTableRow from "../components/PostTableRow";
import "./PostTableStyles.css";

export default function PostTable({ data, deleteData }) {
  return (
    <div className="postList">
      {data.map((elem: any) => (
        <PostTableRow key={elem.id} elem={elem} deleteData={deleteData} />
      ))}
    </div>
  );
}
