import React from "react";
import { Route, Switch } from "react-router-dom";

import PreviewList from "./components/Comics/PreviewList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={PreviewList} />
    </Switch>
  );
};

export default Routes;
