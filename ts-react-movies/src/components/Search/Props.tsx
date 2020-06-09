export interface HistorySearchProps {
  historySearch: string[];
  onClick(text: string): void;
  onRemove(text: string): void;
  toggle: boolean;
}

export interface HistorySearchCardProps {
  item: string;
  onClick(text: string): void;
  onRemove(text: string): void;
}
