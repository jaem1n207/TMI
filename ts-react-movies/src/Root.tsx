import * as React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { library } from "@fortawesome/fontawesome-svg-core";

import { basename } from "config/config.json";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "pages/HomePage";
import DetailNowPlayingPage from "pages/NowPlayingPPage";
import DetailPopularPage from "pages/DetailPopular";
import SearchPage from "pages/SearchPage";
import DetailPage from "pages/DetailPage";
import UpcomingPage from "pages/UpcomingPage";
import TopRatePage from "pages/TopRatePage";

library.add(faSearch);

interface RootProps {}
const Root: React.SFC<RootProps> = () => {
  return (
    <BrowserRouter basename={basename}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/nowPlaying" component={DetailNowPlayingPage} />
        <Route exact path="/popular" component={DetailPopularPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/detail/:movieId" component={DetailPage} />
        <Route exact path="/upcoming" component={UpcomingPage} />
        <Route exact path="/toprate" component={TopRatePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
