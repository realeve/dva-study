import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Products from "./routes/Products";
import Antd from "./routes/Antd";
import AntMenu from "./routes/AntMenu";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/antd" exact component={Antd} />
        <Route path="/menu" exact component={AntMenu} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
