import * as React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter, Redirect } from "react-router-dom";
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
import TvTopRatePage from "pages/TvTopRatePage";

library.add(faSearch);

interface RootProps {}
const Root: React.SFC<RootProps> = () => {
  return (
    <BrowserRouter basename={basename}>
      <Switch>
        <Route exact path="/movie" component={HomePage} />
        <Route
          exact
          path="/movie/nowPlaying"
          component={DetailNowPlayingPage}
        />
        <Route exact path="/movie/popular" component={DetailPopularPage} />
        <Route exact path="/movie/search" component={SearchPage} />
        <Route exact path="/movie/detail/:movieId" component={DetailPage} />
        <Route exact path="/movie/upcoming" component={UpcomingPage} />
        <Route exact path="/movie/toprate" component={TopRatePage} />
        {/*<Route exact path="/tv" component={HomePage} />
        <Route exact path="/tv/top-rate" component={TvTopRatePage} />
        <Route exact path="/tv/airing-today" component={TvTopRatePage} />
        <Route exact path="/tv/on-the-air" component={TvTopRatePage} />
        <Route exact path="/tv/popular" component={TvTopRatePage} /> */}
        <Redirect from="*" to="/movie" />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
