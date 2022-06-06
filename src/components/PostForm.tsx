import React, { useState } from "react";
import "./PostFormStyles.css";

const initialForm = {
  id: null,
  title: "",
  body: ""
};

export default function PostForm({ createData, dataToEdit, setDataToEdit }) {
  const [form, setForm] = useState({ initialForm });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.body) {
      alert("Datos Incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    }
    handleReset();
  };

  return (
    <div className="form">
      <h2 className="title">Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="inputTitle"
          type="text"
          name="title"
          placeholder="Title:"
          onChange={handleChange}
          value={form.title}
        ></input>
        <textarea
          className="textArea"
          name="body"
          placeholder="Body:"
          onChange={handleChange}
          value={form.body}
        ></textarea>
        <div className="buttons">
          <input type="submit" value="Send" className="buttonSend"></input>
          <input
            type="reset"
            value="Clear"
            onClick={handleReset}
            className="buttonClear"
          ></input>
        </div>
      </form>
      <br></br>
    </div>
  );
}
