import React from "react";
import * as Props from "./Props";
import "./HistorySearch.scss";
import styled from "styled-components";

const Wrap = styled.div<{ toggle: boolean }>`
  display: ${(props) => (props.toggle ? "block" : "none")};
`;

const HistorySearch: React.FC<Props.HistorySearchProps> = ({
  historySearch,
  toggle,
  onClick,
  onRemove,
}) => {
  return (
    <Wrap className="HistorySearch-Wrap" toggle={toggle}>
      {historySearch.length !== 0 && <div>최근 검색</div>}
      {historySearch.map((item: string, i: number) => (
        <HistorySearchCard
          key={i}
          item={item}
          onClick={onClick}
          onRemove={onRemove}
        />
      ))}
    </Wrap>
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
