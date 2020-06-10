import React from "react";
import SubPage from "components/SubTemplate/SubTemplate";
import Navbar from "components/common/Navbar/Navbar";
import Header from "containers/Header/HeaderContainer";

interface DetailPageProps {}
const DetailPage: React.SFC<DetailPageProps> = (props) => {
  const Components = {
    Navbar: <Navbar />,
    Header: <Header />,
  };
  return <SubPage Components={Components}></SubPage>;
};

export default DetailPage;
