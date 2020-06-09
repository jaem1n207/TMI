import React from "react";
import { RingLoader } from "react-spinners";
import * as Props from "./Props";
import "./LoadingPage.scss";

const LoadingPage: React.FC<Props.LoadingProps> = (props) => {
  return (
    <div className="Loading">
      <RingLoader loading={true} size={100} color={"#3700B3"} />
    </div>
  );
};

export default LoadingPage;
