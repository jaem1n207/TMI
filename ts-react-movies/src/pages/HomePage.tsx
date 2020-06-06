import * as React from "react";
import App from "components/common/PageTemplate/PageTemplate";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";
import NowPlayingPage from "pages/NowPlayingPage";
import PopularPage from "./Popular";
import VideosPage from "./VideosPage";

interface HomePageProps {}
const HomePage: React.SFC<HomePageProps> = (props) => {
  const Components = {
    Navbar: <Navbar />,
    Header: <Header />,
    NowPlayingPage: <NowPlayingPage />,
    PopularPage: <PopularPage />,
    VideosPage: <VideosPage />,
  };

  return <App Components={Components}></App>;
};

export default HomePage;
