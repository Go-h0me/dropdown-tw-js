import React, { useState } from "react";
import PropTypes from "prop-types";

const dropData = ["Viet Nam", "Canada", "USD", "Thai Lan", "Iraq"];

const Dropdown = (props) => {
  const { haveSearch = true, haveIcon = true } = props;

  const [showDrop, setShowDrop] = useState(false);

  const handleToggleDropdown = () => {
    setShowDrop(!showDrop);
  };

  return (
    <div className="w-full max-w-[220px] relative">
      <div
        className="select flex items-center
      
      justify-between
      cursor-pointer rounded-lg border-lg
        border-slate-100 p-5
      "
        onClick={handleToggleDropdown}
      >
        <span> Select the country</span>
        {/* haveIcon */}

        {haveIcon && (
          <span>
            {showDrop ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        )}
      </div>

      {/* stale  */}
      {showDrop && (
        <div
          className="absolute left-0 right-0
         dropdown-list top-full list-none
         border-slate-100
         "
           >
          {/* search */}

          {/* Array(3).fill(0) */}
          {dropData.map((item, i) => (
            <span
              key={item}
              className="block p-5  bg-white
           cursor-pointer hover:bg-slate-50 
           "
            >
              {item}
            </span>
          ))}

          {haveSearch && (
            <div
              className="dropdown-search block p-5 bg-white
          
          "
            >
              <input
                type="text"
                name="search"
                placeholder="Search name you want"
                id=""
                className="w-full p-3 outline-none"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
Dropdown.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  haveSearch: PropTypes.bool,
  // haveSearch: PropTypes.bigint,
};

export default Dropdown;
