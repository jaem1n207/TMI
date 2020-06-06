import React from "react";
import PopularContainer from "containers/Popular/PopularContainer";

interface TopRatedPageProps {}
const TopRatedPage: React.SFC<TopRatedPageProps> = () => {
  return (
    <>
      <PopularContainer />
    </>
  );
};

export default TopRatedPage;
