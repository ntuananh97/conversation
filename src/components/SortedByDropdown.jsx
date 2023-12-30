import { useState } from "react";
import Dropdown from "./Dropdown";

const SortedByMenu = [
  {
    key: "best",
    label: "Best",
  },
  {
    key: "newest",
    label: "Newest",
  },
  {
    key: "oldest",
    label: "Oldest",
  },
];

function SortedByDropdown() {
  const [sortedBy, setSortedBy] = useState(() => SortedByMenu[0]);

  const handleChangeSortedBy = (option) => {
    setSortedBy(option);
  };

  return (
    <Dropdown
      menu={SortedByMenu}
      onSelect={handleChangeSortedBy}
      selectable
      defaultSelectedKey={sortedBy.key}
    >
      <p>
        <span className="text-color-scheme-l5 font-bold">{sortedBy.label}</span>{" "}
        <i className="fa-solid fa-angle-down ml-1 text-[10px]"></i>
      </p>
    </Dropdown>
  );
}

export default SortedByDropdown;
