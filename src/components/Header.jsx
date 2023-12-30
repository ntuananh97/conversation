function Header() {
  return (
    <div>
      <div className="flex items-center justify-between pb-[9px] border-b border-[#e3e3e3] border-solid">
        <div className="flex items-end font-bold items-center">
          <h1 className="text-black-400 text-[24px]">Conversation</h1>
          <p className="text-color-scheme-l5 ml-[9px]">7.3K Comments</p>
        </div>

        <p className="flex items-center gap-2">
          <i className="fa-solid fa-user-group text-[#35B940] text-[12px]"></i>
          <span>20 Viewing</span>
        </p>
      </div>

      <p className="mt-[15px]">Discussions are moderated. For more details, click here</p>
    </div>
  );
}

export default Header;
