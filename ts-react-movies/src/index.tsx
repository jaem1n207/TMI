import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import reducers from "modules/movie";
import { ToastProvider } from "react-toast-notifications";

const middlewares = [Thunk, logger];
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider autoDismissTimeout={2000}>
      <Root />
    </ToastProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
