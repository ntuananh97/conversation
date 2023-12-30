import useStore from "../store/useStore";
import CommentItem from "./CommentItem"

function CommentList() {
  const {comments} = useStore((state) => state);
  console.log("CommentList ~ comments:", comments)

  return (
    <ul className="mt-[20px]">
      {comments.map((cmt, index) => (
        <CommentItem key={index} data={cmt} />
      ))}
    </ul>
  );
}

export default CommentList