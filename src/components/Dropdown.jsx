/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";

/**
 * A number, or a string containing a number.
 * @typedef {{key: string, label: React.JSX.Element}} MenuType
 */


/**
 * Dropdown component.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {MenuType[]} props.menu - An array of options for the dropdown.
 * @param {(option: MenuType) => void} props.onSelect - A function to be called when an option is selected.
 * @param {boolean} [props.selectable] - show dropdown as select
 * @param {MenuType['key']} props.defaultSelectedKey - default selected key
 * @param {'left' | 'right'} props.placement - position of dropdown
 * @returns {JSX.Element} A dropdown component.
 */
const Dropdown = ({
  onSelect,
  children,
  menu = [],
  selectable,
  defaultSelectedKey = "",
  placement = 'left',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(() => defaultSelectedKey);

  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSelect = (option) => {
    onSelect?.(option);
    setIsOpen(false);
    setSelectedKey(option.key);
  };


  return (
    <div className="dropdown relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>{children}</button>
      {isOpen && (
        <ul
          className={clsx(
            "dropdown-list absolute z-10 bg-white p-[5px] rounded shadow-dropdown w-[200px]",
            { "left-0": placement === "left", "right-0": placement === "right" }
          )}
        >
          {menu.map((option, index) => {
            const checkedMenuItem = selectable && selectedKey === option.key;
            return (
              <li className="w-full" key={option.key || index}>
                <button
                  className={clsx(
                    "w-full p-[10px] flex items-center justify-between text-color-scheme-l6",
                    "hover:bg-color-scheme-l11",
                    {
                      "font-bold": checkedMenuItem,
                    }
                  )}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                  {checkedMenuItem && <i className="fa-solid fa-check"></i>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
