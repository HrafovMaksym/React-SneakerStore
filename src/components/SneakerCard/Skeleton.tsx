import React from "react";
import ContentLoader from "react-content-loader";
import styles from "../../scss/Modules/SneakerCard.module.scss";
const Skeleton: React.FC = () => (
  <ContentLoader
    className={styles.skeleton}
    speed={2}
    width={280}
    height={520}
    viewBox="0 0 345 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="170" y="417" rx="0" ry="0" width="1" height="4" />
    <rect x="0" y="331" rx="0" ry="0" width="360" height="40" />
    <rect x="0" y="0" rx="0" ry="0" width="360" height="300" />
    <rect x="0" y="405" rx="0" ry="0" width="71" height="17" />
    <rect x="0" y="382" rx="0" ry="0" width="96" height="20" />
  </ContentLoader>
);

export default Skeleton;
