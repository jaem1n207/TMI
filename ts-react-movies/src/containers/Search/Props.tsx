export interface SearchContainerProps {
  loading: boolean | undefined;
  searchResult: Array<any> | undefined;
  total_results: any;
  getSearch: Function;
}
