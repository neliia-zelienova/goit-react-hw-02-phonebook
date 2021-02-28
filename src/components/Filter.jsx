import React from "react";

const Filter = ({ onChange }) => {
  return (
    <label htmlFor="">Find contacts by name
      <input type="text" name="filter" onChange={onChange}></input>
    </label>
  );
};

export default Filter;