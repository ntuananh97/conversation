import { useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import useClickOutside from "../hooks/useClickOutside";

function CommentBox() {
  const [isHover, setIsHover] = useState(false);
  const commentBoxRef = useRef(null);
    const [commentText, setSommentText] = useState('')


  const handleClickOutsideCommentBox = () => {
    setIsHover(false)
  };

  useClickOutside(commentBoxRef, handleClickOutsideCommentBox);


  const handleComment = () => {
    console.log('comment');
  };

  return (
    <div className="mt-[15px]" ref={commentBoxRef}>
      <TextareaAutosize
        className={`w-full rounded px-[15px] py-[10px] outline-none border border-solid border-border-color-gray resize-none
      placeholder:text-color-scheme-l5 text-color-scheme-l5
      `}
        placeholder="What do you think?"
        minRows={isHover ? 3 : 1}
        onFocus={() => setIsHover(true)}
        onChange={e => setSommentText(e.target.value)}
        value={commentText}
      />

      {isHover && (
        <div className="mt-[15px] text-right">
          <button
            className="px-[15px] py-2 rounded-[6px] bg-[#003365] text-white font-bold"
            onClick={handleComment}
          >
            Comment
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentBox;
