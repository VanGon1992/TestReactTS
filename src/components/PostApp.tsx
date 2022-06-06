import React, { useState, useEffect } from "react";
import PostTable from "../components/PostTable";
import PostForm from "./PostForm";
import "./PostAppStyles.css";

export default function PostApp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        if (mounted) {
          setPosts(data);
          console.log(data);
        }
      });
    return function cleanUp() {
      mounted = false;
    };
  }, []);
  console.log(posts);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);
    setPosts([...posts, data]);
  };

  // const deleteData = (id: number) => {
  //   let newData = posts.filter((elem) => elem.id !== id);
  //   setPosts(newData);
  // };

  const deleteData = (id: number) => {
    let cleanedData = posts.filter((post) => post.id !== id);
    setPosts(cleanedData);
  };

  return (
    <div>
      <div className="titles">
        <h1 className="title1">Post App Test</h1>
        <h4 className="title2">Gonzalo Mansilla</h4>
      </div>
      <PostForm createData={createData} />
      <div>
        <PostTable data={posts} deleteData={deleteData} />
      </div>
      <footer className="footer">
        <h3>Gonzalo Mansilla</h3>
        <h4>Front End Developer</h4>
        <span className="mailLink">gonzalo.mansill@gmail.com</span>
        <a
          className="linkdInLink"
          href="https://www.linkedin.com/in/gonzalomansillafrontend/"
        >
          LinkdIn
        </a>
      </footer>
    </div>
  );
}
