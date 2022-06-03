import React from "react";

export default function PostList({ title, body, id, deleteData }) {
  return (
    <div>
      <span>{title}</span>
      <span>{body}</span>
      <button onClick={() => deleteData(id)}>Delete</button>
    </div>
  );
}
