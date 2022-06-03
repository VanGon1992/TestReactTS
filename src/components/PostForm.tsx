import React, { useState } from "react";

const initialForm = {
  id: null,
  title: "",
  body: ""
};

export default function PostForm({ createData }) {
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
    <div>
      <h3>{"Añadir Usuario"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={form.title}
        ></input>
        <textarea
          name="body"
          placeholder="Body"
          onChange={handleChange}
          value={form.body}
        ></textarea>
        <input type="submit" value="Send"></input>
        <input type="reset" value="Clear" onClick={handleReset}></input>
      </form>
      <br></br>
    </div>
  );
}
