import React from "react";
import NowPlayingContainer from "containers/NowPlayingContainer";

interface NowPlayingPageProps {}
const NowPlayingPage: React.SFC<NowPlayingPageProps> = () => {
  return (
    <>
      <NowPlayingContainer />
    </>
  );
};

export default NowPlayingPage;
