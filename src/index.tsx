import React, { ComponentType } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { AppContainer } from "react-hot-loader";
import { store, history } from "@src/redux/store";
import { App } from "@src/app/app.container";

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
    module.hot.accept("@src/app/app.container", () => render(App));
}
