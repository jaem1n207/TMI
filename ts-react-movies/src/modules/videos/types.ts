export interface VideosState {
  loading?: boolean;
  videos?: Array<Object>;
}

export interface ObjectType {
  id?: string;
  key: string;
  name?: string;
  site?: string;
  size?: number;
  type?: string;
}

export interface Action {
  type?: string;
  payload: {
    loading: boolean;
    videos: Array<ObjectType>;
  };
}
