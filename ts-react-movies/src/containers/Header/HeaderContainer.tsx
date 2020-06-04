import React, { useState } from "react";
import Header from "components/common/Header/Header";

interface HeaderContainerProps {}
const HeaderContainer: React.SFC<HeaderContainerProps> = () => {
  const [keyword, setKeyword] = useState("");

  const handleOnSubmit = () => {
    /* 영화정보 받아오는 액션함수 */
    alert("엔터 쳤어용!");
  };

  const handleKeyPress = (e: React.KeyboardEvent<Element>) => {
    if (e.key === "Enter") {
      handleOnSubmit();
    }
  };

  return (
    <Header
      keyword={keyword}
      setKeyword={setKeyword}
      handleKeyPress={handleKeyPress}
    />
  );
};

export default HeaderContainer;
