import React from "react";
import * as Props from "./Props";
import "./HistorySearch.scss";
import styled from "styled-components";

const HistorySearch: React.FC<Props.HistorySearchProps> = ({
  historySearch,
  onClick,
  onRemove,
}) => {
  return (
    <div className="HistorySearch-Wrap">
      {historySearch.length !== 0 && <div>최근 검색</div>}
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
      <div className="HistorySearch-Wrap-Icon" onClick={() => onRemove(item)} />
    </div>
  );
};

export default HistorySearch;
