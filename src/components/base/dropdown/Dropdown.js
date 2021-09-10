import React from "react";
import { Dropdown as DropdownSort } from "react-bootstrap";

const Dropdown = ({ name, sortBy, setSort }) => {
  return (
      <DropdownSort>
        <DropdownSort.Toggle variant="success" id="dropdown-basic">
          {name}
        </DropdownSort.Toggle>

        <DropdownSort.Menu>
          {sortBy.map((item) => (
            <DropdownSort.Item onClick={() => setSort(item.id)} key={item.id}>
              {item.name}
            </DropdownSort.Item>
          ))}
        </DropdownSort.Menu>
      </DropdownSort>
  );
};

export default Dropdown;
