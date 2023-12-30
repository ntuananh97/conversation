import Dropdown from "./Dropdown";

const actionMenu = [
  {
    key: "report",
    label: (
      <p>
        <i className="fa-solid fa-flag mr-[6px]"></i> Report
      </p>
    ),
  },
];

function CommentActions() {
  const handleSelectOption = () => {};
  return (
    <div className="absolute top-2 right-0">
      <Dropdown
        menu={actionMenu}
        onSelect={handleSelectOption}
        placement="right"
      >
        <i className="fa-solid fa-ellipsis"></i>
      </Dropdown>
    </div>
  );
}

export default CommentActions;
