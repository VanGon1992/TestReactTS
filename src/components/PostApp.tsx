import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";
import PostForm from "./PostForm";

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
      <h1>Post App Test</h1>
      <h2>Gonzalo Mansilla</h2>
      <br></br>
      <PostForm createData={createData} />
      <div>
        {posts.map((post) => (
          <PostList
            key={post.id}
            id={posts.id}
            title={post.title}
            body={post.body}
            deleteData={deleteData}
          />
        ))}
      </div>
    </div>
  );
}
