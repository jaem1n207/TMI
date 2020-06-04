import * as React from "react";
import App from "components/common/PageTemplate/PageTemplate";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";

interface HomePageProps {}
const HomePage: React.SFC<HomePageProps> = (props) => {
  const Components = {
    Navbar: <Navbar />,
    Header: <Header />,
  };

  console.log(Components);

  return <App Components={Components}></App>;
};

export default HomePage;
