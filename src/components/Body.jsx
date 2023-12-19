import { useRef, useState } from "react";
import { rotArrayObj } from "../data.js";

const Body = () => {
  const [rot, setRot] = useState(13);
  const inputText = useRef();

  const handleRotSelection = (e) => {
    e.target.value;
    console.log(e.target.value);
  };

  return (
    <div>
      <label>Input Text: </label>
      <p>
        <textarea type="text" />
      </p>
      <p className="arrow">↓</p>
      <p>
        <select
          onChange={handleRotSelection}
          // defaultValue={rotArrayObj[12].rot}
        >
          {rotArrayObj.map((item) => (
            <option
              key={item.value}
              value={item.value}
              selected={item.rot === "ROT13"}
            >
              {item.rot}
            </option>
          ))}
        </select>
      </p>
      <p className="arrow">↓</p>
      <label>Result: </label>
      <p>
        <textarea type="text" readOnly />
      </p>
    </div>
  );
};
export default Body;
