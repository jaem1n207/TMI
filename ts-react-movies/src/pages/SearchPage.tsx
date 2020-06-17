import React from "react";
import SearchContainer from "containers/Search/SearchContainer";
import ReactHelmet from "components/common/Helmet/ReactHelmet";

interface SearchPageProps {}
const SearchPage: React.SFC<SearchPageProps> = () => {
  return (
    <>
      <ReactHelmet title="Search" description="검색">
        <meta charSet="utf-8" />
        <title>Search</title>
      </ReactHelmet>
      <SearchContainer />
    </>
  );
};

export default SearchPage;
