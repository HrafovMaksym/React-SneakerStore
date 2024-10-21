import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={1202}
    height={673}
    viewBox="0 0 1202 673"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="151" y="16" rx="0" ry="0" width="460" height="40" />
    <rect x="225" y="102" rx="0" ry="0" width="460" height="61" />
    <rect x="225" y="169" rx="0" ry="0" width="79" height="24" />
    <rect x="225" y="207" rx="0" ry="0" width="450" height="350" />
    <circle cx="1143" cy="130" r="22" />
    <rect x="720" y="207" rx="0" ry="0" width="440" height="45" />
    <rect x="720" y="267" rx="0" ry="0" width="440" height="180" />
    <rect x="750" y="465" rx="0" ry="0" width="98" height="20" />
    <rect x="750" y="500" rx="0" ry="0" width="98" height="20" />
    <rect x="875" y="500" rx="0" ry="0" width="98" height="20" />
    <rect x="875" y="465" rx="0" ry="0" width="98" height="20" />
    <rect x="225" y="567" rx="0" ry="0" width="130" height="200" />
    <rect x="385" y="567" rx="0" ry="0" width="130" height="200" />
    <rect x="545" y="567" rx="0" ry="0" width="130" height="200" />
  </ContentLoader>
);

export default Skeleton;
