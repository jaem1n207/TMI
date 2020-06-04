import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../components/common/Button/Button";

interface NotFoundPageProps extends RouteComponentProps<any> {}
const NotFoundPage: React.SFC<NotFoundPageProps> = ({ history, location }) => {
  const posStyle = {
    top: "40%",
    left: "40%",
    position: "absolute",
    justifyContent: "center",
    alignItem: "center",
    textAlign: "center",
    color: "white",
  } as React.CSSProperties;
  const NBtnStyle = {
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#fff",
  } as React.CSSProperties;

  return (
    <div style={posStyle}>
      <h2>
        페이지를 찾을 수 없어요!! <br></br>현재 페이지:{" "}
        <code>{location.pathname}</code>
      </h2>
      <Button
        style={NBtnStyle}
        onClick={() => {
          history.push("/");
        }}
        text="Go Home"
        type="button"
      />
    </div>
  );
};

export default NotFoundPage;
