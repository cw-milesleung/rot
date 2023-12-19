const Body = () => {
  return (
    <div>
      <label>Input: </label>
      <p>
        <textarea type="text" />
      </p>
      <p className="arrow">↓</p>
      <p className="arrow">↓</p>
      <label>Output: </label>
      <p>
        <textarea type="text" readOnly />
      </p>
    </div>
  );
};
export default Body;
