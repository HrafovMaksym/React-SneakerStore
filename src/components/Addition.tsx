import React from "react";
import Brand from "./FilterCompon/Brand";
import Collection from "./FilterCompon/Collection";
import Sizes from "./FilterCompon/Sizes";
import Price from "./FilterCompon/Price";
import styles from "../scss/Modules/Addition.module.scss";
const Addition: React.FC = () => {
  return (
    <div className={styles.root}>
      <Price />
      <Brand />
      <Collection />
      <Sizes />
    </div>
  );
};
export default Addition;
