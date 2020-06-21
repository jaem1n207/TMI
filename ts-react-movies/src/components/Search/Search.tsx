/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./Search.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaTimesCircle } from "react-icons/fa";

const cx = classNames.bind(style);

interface SearchProps {
  keyword: string;
  setKeyword: Function;
  onChange: (e: any) => void;
  iconColor: string;
  historySearch: string[];
  total_results: any;
  handleFocus: (e: any) => void;
  handleBlur: (e: any) => void;
  onCancel(): void;
  searchResult:
    | Array<{
        popularity?: number; // 인기
        vote_count?: number;
        video?: boolean;
        poster_path: string;
        id: number;
        adult?: boolean;
        backdrop_path?: string;
        original_language?: string;
        original_title?: string;
        genre_ids?: number[];
        title: string;
        vote_average?: number;
        overview?: string; // 줄거리
        release_date: string;
      }>
    | undefined;
}
const Search: React.SFC<SearchProps> = ({
  keyword,
  searchResult,
  onChange,
  onCancel,
  historySearch,
  total_results,
  setKeyword,
  handleFocus,
  handleBlur,
  iconColor,
}) => {
  return (
    <>
      <div className={cx("Search-Wrap")}>
        <form
          onSubmit={(e: React.FormEvent<HTMLElement>) => {
            e.preventDefault();
          }}
        >
          <div
            className={cx("Search-Wrap-Div")}
            style={{ width: "100%", position: "relative" }}
          >
            <span className={cx("Search-Wrap-Div-IconWrap")}>
              <FontAwesomeIcon
                className={cx("Search-Wrap-Div-IconWrap-Icon")}
                icon={faSearch}
                size="lg"
                color={iconColor}
              />
            </span>
            <input
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={cx("Search-Wrap-Div-Input")}
              type="text"
              value={keyword}
              onChange={onChange}
              placeholder="영화 제목을 입력해주세요..."
            />
            <FaTimesCircle
              className={`Search-Wrap-Div-Cancel ${
                keyword !== "" ? "block" : "none"
              }`}
              onClick={onCancel}
            />
          </div>
        </form>
        {total_results === 0 ? (
          ""
        ) : keyword === "" ? (
          ""
        ) : (
          <div className={cx("Search-Wrap-ResultCnt")}>
            총 <b>{total_results.total_results}개</b>의 영화를 찾았습니다.
          </div>
        )}
        {searchResult?.map((item, i) => (
          <SearchCard
            key={i}
            poster_path={item.poster_path}
            id={item.id}
            title={item.title}
            release_date={item.release_date}
            historySearch={historySearch}
          />
        ))}
      </div>
    </>
  );
};

interface SearchCardProps {
  poster_path: string;
  id: number;
  title: string;
  release_date: string;
  historySearch: string[];
}
const SearchCard: React.SFC<SearchCardProps> = ({
  id,
  poster_path,
  release_date,
  title,
  historySearch,
}) => {
  const poster = require("assets/poster.png");

  return (
    <div className={cx("SearchCard-Wrap")}>
      <Link to={`/detail/${id}`}>
        <div className={cx("SearchCard-Wrap-Box")}>
          <div
            onClick={() => {
              historySearch = historySearch.filter((item) => item !== title);
              localStorage.setItem(
                "TMI",
                JSON.stringify([...historySearch, title])
              );
            }}
          />

          {poster_path !== null ? (
            <span>
              <img
                style={{ width: "100%", height: "100%" }}
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              />
            </span>
          ) : (
            <span>
              <img style={{ width: "100%", height: "100%" }} src={poster} />
            </span>
          )}
          <div className={cx("SearchCard-Wrap-Box-Content")}>
            {release_date !== undefined ? (
              <div className={cx("SearchCard-Wrap-Content-Date")}>{`${
                release_date.split("-")[0]
              }.${release_date.split("-")[1]}.${
                release_date.split("-")[2]
              }`}</div>
            ) : (
              <div className={cx("SearchCard-Wrap-Box-Content-Date")}>
                정보가 없습니다.
              </div>
            )}
            <div className={cx("SearchCard-Wrap-Box-Content-Title")}>
              {title}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Search;
