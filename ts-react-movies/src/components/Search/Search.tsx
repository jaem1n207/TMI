import React from "react";
import style from "./Search.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styled from "styled-components";

const cx = classNames.bind(style);

interface SearchProps {
  keyword: string;
  setKeyword: Function;
  onChange: (e: any) => void;
  historySearch: string[];
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
  historySearch,
}) => {
  return (
    <>
      <div className={cx("Search-Wrap")}>
        <form
          onSubmit={(e: React.FormEvent<HTMLElement>) => {
            e.preventDefault();
          }}
        >
          <input
            className={cx("Search-Wrap-Input")}
            type="text"
            value={keyword}
            onChange={onChange}
            placeholder="영화 제목을 입력해주세요..."
          />
        </form>
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
  const HistoryWrap = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    filter: brightness(70%);
    cursor: pointer;
    &:hover {
      filter: brightness(100%);
    }
  `;

  const poster = require("assets/poster.png");

  return (
    <div className={cx("SearchCard-Wrap")}>
      <Link to={`/detail/${id}`}>
        <HistoryWrap
          onClick={() => {
            historySearch = historySearch.filter((item) => item !== title);
            localStorage.setItem(
              "TMI",
              JSON.stringify([...historySearch, title])
            );
          }}
        />
        {poster_path !== null ? (
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
        ) : (
          <img src={poster} />
        )}
        <div className={cx("SearchCard-Wrap-Content")}>
          {release_date !== undefined ? (
            <div className={cx("SearchCard-Wrap-Content-Date")}>{`${
              release_date.split("-")[0]
            }.${release_date.split("-")[1]}.${
              release_date.split("-")[2]
            }`}</div>
          ) : (
            <div className={cx("SearchCard-Wrap-Content-Date")}>
              정보가 없습니다.
            </div>
          )}
          <div className={cx("SearchCard-Wrap-Content-Title")}>{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default Search;
