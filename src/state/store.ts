import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { logger } from "redux-logger";

import { rootReducer } from "@src/reducers";

export const history = createHistory();

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            reduxThunk,
            logger,
        ),
    ),
);
