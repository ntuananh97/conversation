import SortedByDropdown from "./SortedByDropdown";



function CommentSection() {
  return (
    <div className="mt-[15px]">
      <div className="text-color-scheme-l5 text-[14px] flex items-center gap-1">
        Sort by <SortedByDropdown />
      </div>
    </div>
  );
}

export default CommentSection;
