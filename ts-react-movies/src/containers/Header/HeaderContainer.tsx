import React, { useState } from "react";
import Header from "components/common/Header/Header";
import { useToasts } from "react-toast-notifications";

interface HeaderContainerProps {}
const HeaderContainer: React.SFC<HeaderContainerProps> = () => {
  const { addToast } = useToasts();

  const [keyword, setKeyword] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<Element>) => {
    addToast("검색을 위해 검색페이지로 이동하였습니다!", {
      appearance: "success",
      autoDismiss: true,
    });
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    addToast("검색을 위해 검색페이지로 이동하였습니다!", {
      appearance: "success",
      autoDismiss: true,
    });
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
