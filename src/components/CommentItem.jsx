/* eslint-disable react/prop-types */
import { useState } from "react";
import CommentActions from "./CommentActions";
import CommentBox from "./CommentBox";
import ShareAction from "./ShareAction";

function CommentItem({ data = {} }) {
  const [isReply, setIsReply] = useState(false);

  const replyCount = data.total_replies_count;
  const replies = data.replies || []

  return (
    <li className="comment-item relative pb-[7px]">
      <div className="flex gap-[10px]">
        <div className="comment-item__image shrink-0">
          <img
            src="https://images.spot.im/image/upload/c_thumb,w_30,h_30,q_70,dpr_3,g_faces,f_png,fl_lossy,fl_png8/v200/p/u/dxry0cqjtn1h6job7fsb"
            alt="Avatar"
            className="w-[30px] h-[30px] rounded-[50%] "
          />
        </div>

        <div>
          <div>
            <h2 className="text-border-color-muted leading-[21px] font-bold">
              {data.user_id}
            </h2>
            <p className="text-color-scheme-l5 text-[13px] leading-[21px]">
              {" "}
              27 December, 2023{" "}
            </p>
            <div className="text-color-scheme-l6 leading-normal mt-[2px]">
              {" "}
              {data.content.map((cnt, index) => (
                <p key={index}>{cnt.text}</p>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-[8px]">
              <button
                className="comment-item__btn comment-item__btn--text"
                onClick={() => setIsReply(true)}
              >
                Reply
              </button>
              {/* <span className="comment-item__dot">.</span> */}
              <button className="comment-item__btn comment-item__btn--actions">
                <i className="fa-regular fa-thumbs-up"></i> 137
              </button>
              <button className="comment-item__btn comment-item__btn--actions">
                <i className="fa-regular fa-thumbs-down"></i> 4
              </button>
              {/* <span className="comment-item__dot" /> */}
              <ShareAction />
            </div>
          </div>

          {isReply && (
            <div>
              <CommentBox autoFocus />
            </div>
          )}
          {replies.length > 0 && (
            <ul>
              {replies.map((rep, ind) => (
                <CommentItem key={`${ind}+${rep.id}`} data={rep} />
              ))}
            </ul>
          )}

          <div className="comment-item__reply mb-[5px] mt-[10px]">
            <button className="flex items-center text-color-scheme-l5 text-[14px]">
              <i className="fa-solid fa-reply rotate-180 text-[13px] mr-2"></i>
              {replyCount > 1 ? `${replyCount} Replies` : `${replyCount} Reply`}
            </button>
          </div>
        </div>
      </div>

      <CommentActions />
    </li>
  );
}

export default CommentItem;
