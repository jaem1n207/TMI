import React, { useState, useEffect } from "react";
import SearchList from "components/Search/Search";
import HistorySearchList from "components/Search/HistorySearch";
import * as Props from "./Props";
import { connect } from "react-redux";
import { RootState } from "modules";
import { getSearch } from "modules/Search";
import LoadingPage from "components/common/LoadingPage/LoadingPage";

const SearchContainer: React.SFC<Props.SearchContainerProps> = ({
  loading,
  searchResult,
  total_results,
  getSearch,
}) => {
  const [keyword, setKeyword] = useState<string>("");
  const [historySearch, setHistorySearch] = useState<string[]>([]);
  const [toggle, setToggle] = useState<boolean>(true);
  const [movies, setMovies] = useState<any[] | undefined>([]);
  const [iconColor, setIconColor] = useState("rgba(255, 255, 255, 0.7)");

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIconColor("#424244");
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIconColor("rgba(255, 255, 255, 0.7)");
  };

  useEffect(() => {
    if (searchResult?.length !== 0) {
      setMovies(searchResult);
    }
  }, [searchResult]);
  /* input 값이 바뀔 때마다 apiCall() 호출 */
  useEffect(() => {
    console.log(toggle);
    apiCall();
  }, [keyword]);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    // apiClear();
    setKeyword(e.currentTarget.value);
  };

  let apiCallTime: any;

  const apiCall = () => {
    apiCallTime = setTimeout(() => {
      getSearch(keyword);
      if (keyword === "") {
        setToggle(true);
        setMovies([]);
      } else {
        getSearch(keyword);
        setToggle(false);
      }
    }, 200);
  };

  /* const apiClear = () => {
    clearTimeout(apiCallTime);
  };
 */

  //검색창 입력 지우기
  const onCancel = (): void => {
    setKeyword("");
  };

  /* 최근 검색 결과 클릭 */
  const onClick = (text: string): void => {
    setKeyword(text);
    setToggle(false);
  };

  /* 최근 검색 기록 삭제 및 업데이트 */
  const onRemove = (text: string): void => {
    const newHistorySearch = historySearch.filter((item) => item !== text);
    setHistorySearch(newHistorySearch);
    localStorage.setItem("TMI", JSON.stringify(newHistorySearch));
  };

  /* 최근 검색 기록 가져오기 */
  useEffect(() => {
    const getHistorySearch = async (): Promise<any> => {
      try {
        const historySearch: any = await localStorage.getItem("TMI");
        if (historySearch === null) {
          setHistorySearch([]);
        } else {
          setHistorySearch(JSON.parse(historySearch).reverse());
        }
      } catch (error) {
        console.log(error);
      }
    };
    getHistorySearch();
  }, []);

  return (
    <>
      <SearchList
        keyword={keyword}
        setKeyword={setKeyword}
        searchResult={movies}
        onChange={onChange}
        total_results={total_results}
        historySearch={historySearch}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        iconColor={iconColor}
        onCancel={onCancel}
      />

      <div>
        <HistorySearchList
          toggle={toggle}
          historySearch={historySearch}
          onClick={onClick}
          onRemove={onRemove}
        />
      </div>
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.searchResult.loading,
    total_results: state.searchResult.total_results,
    searchResult: state.searchResult.searchResult,
  }),
  { getSearch }
)(SearchContainer);
