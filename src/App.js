

import React from "react";
import Dropdown from "./components/DropdownDraft";
// import Card from "./components/card.js/Card";
// import { Dropdown } from "./components/dropdown";


// const dropData = ["Viet Nam", "Cambodia", "France", "USA", "Thai Lan"];
// console.log(dropdownData,'dau');
const App = () => {
  return (
    <div>
      <Dropdown />

      {/* <Dropdown>
        <Dropdown.Select>
          <span>Select the country</span>
        </Dropdown.Select>
        <Dropdown.List>
          {dropData.map((item) => (
            <Dropdown.Item key={item}>{item}</Dropdown.Item>
          ))}
          <Dropdown.Search></Dropdown.Search>
        </Dropdown.List>
      </Dropdown>
      <Card/> */}
    </div>
  );
};

export default App;