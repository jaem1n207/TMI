import * as React from "react";
import { Switch, Route } from "react-router";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "pages/HomePage";

interface RootProps {}
const Root: React.SFC<RootProps> = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Root;
