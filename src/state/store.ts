import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import { logger } from "redux-logger";

import { rootReducer } from "@src/reducers";

export const history = createHistory();
export const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            reduxThunk,
            logger,
        ),
    ),
);

if (module.hot) {
    module.hot.accept("@src/reducers", () => store.replaceReducer(connectRouter(history)(rootReducer)));
}
