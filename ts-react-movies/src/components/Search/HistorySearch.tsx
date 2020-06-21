import React from "react";
import * as Props from "./Props";
import "./HistorySearch.scss";
import { FaTimesCircle } from "react-icons/fa";

const HistorySearch: React.FC<Props.HistorySearchProps> = ({
  historySearch,
  onClick,
  onRemove,
  toggle,
}) => {
  console.log("historySearch: ", historySearch);
  return (
    <div className={`HistorySearch-Form ${toggle ? "block" : "none"}`}>
      {historySearch.length !== 0 && (
        <div className="HistorySearch-Form-Title">최근 검색</div>
      )}
      {historySearch.map((item: string, i: number) => (
        <HistorySearchCard
          key={i}
          item={item}
          onClick={onClick}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

const HistorySearchCard: React.FC<Props.HistorySearchCardProps> = ({
  item,
  onClick,
  onRemove,
}) => {
  return (
    <div className="HistorySearch-Wrap">
      <div className="HistorySearch-Wrap-Title" onClick={() => onClick(item)}>
        {item}
      </div>
      <FaTimesCircle
        className="HistorySearch-Wrap-Icon"
        onClick={() => onRemove(item)}
      />
    </div>
  );
};

export default HistorySearch;
