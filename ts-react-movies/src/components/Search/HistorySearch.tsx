import React from "react";
import * as Props from "./Props";
import "./HistorySearch.scss";

const HistorySearch: React.FC<Props.HistorySearchProps> = ({
  historySearch,
  toggle,
  onClick,
  onRemove,
}) => {
  return (
    <div className="HistorySearch-Wrap">
      <div className="HistorySearch-Wrap-"></div>
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
