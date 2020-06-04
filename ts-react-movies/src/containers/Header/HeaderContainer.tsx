import React, { useState } from "react";
import Header from "components/common/Header/Header";

interface HeaderContainerProps {}
const HeaderContainer: React.SFC<HeaderContainerProps> = () => {
  const [keyword, setKeyword] = useState("");

  const handleOnSubmit = () => {
    /* 영화정보 받아오는 액션함수 */
    alert("엔터 쳤어용!");
  };

  const WarnMsg = () => {
    alert("최소 2글자 이상을 입력해주세요!");
  };

  const handleKeyPress = (e: React.KeyboardEvent<Element>) => {
    if (e.key === "Enter") {
      if (keyword.length > 1) {
        handleOnSubmit();
      } else {
        WarnMsg();
      }
    }
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (keyword.length > 1) {
      handleOnSubmit();
    } else {
      WarnMsg();
    }
  };

  return (
    <Header
      keyword={keyword}
      setKeyword={setKeyword}
      handleKeyPress={handleKeyPress}
      onClick={onClick}
    />
  );
};

export default HeaderContainer;
