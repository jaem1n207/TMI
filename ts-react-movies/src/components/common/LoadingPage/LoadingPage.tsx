import React from "react";
import { RingLoader } from "react-spinners";
import "./LoadingPage.scss";

interface LoadingProps {}

const LoadingPage: React.FC<LoadingProps> = (props) => {
  return (
    <div className="Loading">
      <RingLoader loading={true} size={100} color={"#3700B3"} />
    </div>
  );
};

export default LoadingPage;
