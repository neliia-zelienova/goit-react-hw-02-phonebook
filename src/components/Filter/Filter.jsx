import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ onChange }) => {
  return (
    <label htmlFor="" className={styles.form_label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onChange}
        className={styles.form_input}
      ></input>
    </label>
  );
};

export default Filter;