import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  const posts = useLoaderData();

  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    });
    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  };

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return <Post key={post.id} author={post.author} body={post.body} />;
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};
export default PostList;
