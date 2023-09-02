import { useRef } from "react";
import React from "react";

const DropdownList = React.forwardRef((props, ref) => {
  return (
    <select ref={ref}>
      {props.items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
});

export default DropdownList;
