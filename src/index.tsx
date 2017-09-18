import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "components/app";
import { store } from "state/store";
import { fetchPhotos } from "actions/creators";

store.dispatch(fetchPhotos("gorrion.pl")).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("container"),
    );
});
