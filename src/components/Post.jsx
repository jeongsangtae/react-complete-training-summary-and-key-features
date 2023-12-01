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
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
