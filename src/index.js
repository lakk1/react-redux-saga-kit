import "core-js/es6";
import 'antd/dist/antd.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { store, persistor } from "./store";


ReactDOM.render(
   <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>,
  document.getElementById("root")
);
registerServiceWorker();
