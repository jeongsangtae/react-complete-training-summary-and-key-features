import classes from "./Post.module.css";

// const Post = (props) => {
//   return (
//     <div>
//       <p>{props.author}</p>
//       <p>{props.body}</p>
//     </div>
//   );
// };

const Post = ({ author, body }) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
};

export default Post;