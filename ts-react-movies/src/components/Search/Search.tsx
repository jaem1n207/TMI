import React from "react";
import style from "./Search.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

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
  setKeyword,
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
        {searchResult?.map((s, i) => (
          <SearchCard
            key={i}
            poster_path={s.poster_path}
            id={s.id}
            title={s.title}
            release_date={s.release_date}
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
    <Link to={`/detail/${id}`}>
      <div className={cx("SearchCard-Wrap")}>
        {() => {
          historySearch = historySearch.filter((item) => item !== title);
          localStorage.setItem(
            "MOVIE_WORLD",
            JSON.stringify([...historySearch, title])
          );
        }}
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
      </div>
    </Link>
  );
};

export default Search;
