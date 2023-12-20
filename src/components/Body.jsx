import { useState } from "react";
import { rotArrayObj, rot13 } from "../data.js";

const Body = () => {
  const [rot, setRot] = useState(13);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleRotSelection = (e) => {
    setRot(e.target.value);
  };

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const output = () => {
    setOutputText(rot13(inputText, rot));
  };

  return (
    <div>
      <label>Input Text: </label>
      <p>
        <textarea
          type="text"
          onChange={(e) => {
            handleInputText(e);
            output();
          }}
        />
      </p>
      <p className="arrow">↓</p>
      <p>
        <select
          onChange={handleRotSelection}
          defaultValue={rotArrayObj[12].value}
        >
          {rotArrayObj.map((item) => (
            <option key={item.value} value={item.value}>
              {item.rot}
            </option>
          ))}
        </select>
      </p>
      <p className="arrow">↓</p>
      <label>Result: </label>
      <p>
        <textarea type="text" readOnly value={outputText} />
      </p>
    </div>
  );
};
export default Body;
