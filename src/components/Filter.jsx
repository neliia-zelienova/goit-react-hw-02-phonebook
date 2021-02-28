import React from "react";

const Filter = ({ onChange }) => {
  return (
    <input type="text" name="filter" onChange={onChange}></input>
  );
};

export default Filter;