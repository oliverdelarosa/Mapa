import React, { useEffect, useState } from "react";
import Weaderform from "./Weaderform";
import Weaderinfo from "./Weaderinfo";
import styles from "./Weaderapp.module.css";

const Weaderapp = () => {
  const [weader, setWeader] = useState(null);
  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weater | ${weader?.location.name ?? ""}`;
  }, [weader]);

  const loadInfo = async (city = "london") => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      setWeader(json);
      console.log(json);
    } catch (error) {}
  };

  const handleChangeCity = (city) => {
    setWeader(null);
    loadInfo(city);
  };
  return (
    <div className={styles.WeaderContainer}>
      <Weaderform onChangeCity={handleChangeCity} />
      <Weaderinfo weader={weader} />
    </div>
  );
};

export default Weaderapp;
