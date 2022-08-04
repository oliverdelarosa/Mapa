import React, { useState } from "react";
import styles from "./Weaderform.module.css";
const Weaderform = ({ onChangeCity }) => {
  const [city, setCity] = useState("");
  const onChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input type="text" onChange={onChange} className={styles.input} />
      </form>
    </div>
  );
};

export default Weaderform;
