import React from "react";
import PageTemplate from "./common/PageTemplate/PageTemplate";

interface AppProps {
  Components: {
    Navbar: JSX.Element;
    Header: JSX.Element;
    NowPlayingPage: JSX.Element;
    TopRatedPage: JSX.Element;
    VideosPage: JSX.Element;
  };
}
const App: React.SFC<AppProps> = ({ Components }) => {
  return <PageTemplate Components={Components}></PageTemplate>;
};

export default App;
