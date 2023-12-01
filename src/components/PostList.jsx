import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Jeong" body="sang tae" />
        <Post author="Kim" body="hun sun" />
      </ul>
    </>
  );
};
export default PostList;
