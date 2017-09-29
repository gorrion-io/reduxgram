import React, { ComponentType } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { AppContainer } from "react-hot-loader";

import { App } from "@src/components/app";
import { store } from "@src/state/store";
import { history } from "@src/state/store";

function render(Component: ComponentType) {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppContainer>
                    <Component />
                </AppContainer>
            </ConnectedRouter>
        </Provider>,
        document.getElementById("container"),
    );
}

render(App);

if (module.hot) {
    module.hot.accept("@src/components/app", () => render(App));
}
