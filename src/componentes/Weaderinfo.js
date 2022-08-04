import React from "react";
import styles from "./Weaderinfo.module.css";

const Weaderinfo = ({ weader }) => {
  return (
    <div className={styles.maininfo}>
      <div className={styles.city}>{weader?.location.name} </div>
      <div className={styles.country}>{weader?.location.country} </div>
      <div className={styles.row}>
        <img
          src={`http:${weader?.current.condition.icon}`}
          width="128"
          alt={weader?.current.condition.text}
        />
      </div>
      <div className={styles.weatherConditions}>
        <div className={styles.condicion}>{weader?.current.condition.text}</div>
        <div className={styles.current}>{weader?.current.temp_c}°</div>
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15605.310001099995!2d${weader?.location.lon}!3d${weader?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1659635403533!5m2!1ses!2spe`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy={`no - referrer - when - downgrade`}
      ></iframe>
    </div>
  );
};

export default Weaderinfo;
