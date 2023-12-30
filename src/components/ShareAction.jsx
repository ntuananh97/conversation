import FacebookIcon from "../shares/icons/Facebook";
import Dropdown from "./Dropdown";

const actionMenu = [
  {
    key: "facebook",
    label: (
      <div className="flex items-center gap-3">
        <FacebookIcon className="w-[15px] h-[15px] fill-blue-500" /> <span>Facebook</span>
      </div>
    ),
  },
  {
    key: "zalo",
    label: (
      <div className="flex items-center gap-3">
        <FacebookIcon className="w-[15px] h-[15px] fill-blue-500" /> <span>Zalo</span>
      </div>
    ),
  },
  {
    key: "instagram",
    label: (
      <div className="flex items-center gap-3">
        <FacebookIcon className="w-[15px] h-[15px] fill-blue-500" /> <span>Instagram</span>
      </div>
    ),
  },
];

function ShareAction() {
  const handleSelectOption = () => {};
  return (
    <Dropdown menu={actionMenu} onSelect={handleSelectOption} placement="left">
      <div className="comment-item__btn comment-item__btn--text">
        Share
      </div>
    </Dropdown>
  );
}

export default ShareAction;
