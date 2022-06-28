import React from "react";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({ children }) => {
  return (
    <DropdownProvider>
      <div className="w-full max-w-[250px] relative">{children}</div>
    </DropdownProvider>
  );
};

export default Dropdown;
