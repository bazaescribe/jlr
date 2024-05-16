import React from "react";
import styles from "./bullet.module.css"

const Bullet = ({title, desc, year}) => {
  return(
    <div className={styles.bullet}>
      <p className={styles.title}>
        {title}
      </p>
      <p className="caption">
        {desc}
      </p>
      <p className="caption">
        {year}
      </p>
    </div>
  );
}

export default Bullet;