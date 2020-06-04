import React from "react";
import { MOVIE_API_KEY } from "config/config.json";
import Template from "./common/PageTemplate/PageTemplate";

interface AppProps {
  Components: {
    Navbar: JSX.Element;
    Header: JSX.Element;
  };
}
const App: React.SFC<AppProps> = ({ Components }) => {
  return <Template Components={Components}></Template>;
};

export default App;
