export interface NowPlayingState {
  readonly type?: string;
  readonly loading?: boolean;
  readonly nowPlaying?: Object;
}

export interface ObjectType {}

export interface Action {
  type: string;
  payload: {
    loading: boolean;
    nowPlaying: Array<ObjectType>;
  };
}
