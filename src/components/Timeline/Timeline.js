import React from "react";
import styles from "./Timeline.module.css";

const Timeline = ({ theme, data, className }) => {
  const getTheme = () =>
    ({
      centered: styles.timeline_centered,
      basic: "",
      split: styles.timeline_split,
    }[theme] || styles.timeline_split);

  return (
    <div className={className}>
      <ul className={`${styles.timeline} ${getTheme()}`}>
        {data.map((item, index) => {
          return (
            <li key={index} className={styles.timeline_item}>
              <div className={styles.timeline_info}>
                <span>{item.date}</span>
              </div>
              <div className={styles.timeline_marker}></div>
              <div className={styles.timeline_content}>
                <h3 className={styles.timeline_title}>{item.title}</h3>
                {item.body && <p className="mt-2">{item.body}</p>}
                {item.children && <div className="mt-2">{item.children}</div>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
