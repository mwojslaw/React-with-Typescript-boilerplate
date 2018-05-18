import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./ducks";
import { Provider } from "react-redux";

import "normalize.css";
import { injectGlobal } from "styled-components";
import { App } from "./containers";

let store = createStore(rootReducer);

injectGlobal`
    html, body, #root {
        height: 100%;
        width: 100%;
    }
`;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"),
);
