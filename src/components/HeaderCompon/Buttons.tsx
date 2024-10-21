import React from "react";
import styles from "./Buttons.module.scss";
import { Link, useLocation } from "react-router-dom";
const Buttons: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.headerBtns}>
      <span className={location.pathname === "/Women" ? styles.activeBtn : ""}>
        <Link to="/Women">Women</Link>
      </span>
      <span className={location.pathname === "/Men" ? styles.activeBtn : ""}>
        <Link to="/Men">Men</Link>
      </span>
    </div>
  );
};
export default Buttons;
