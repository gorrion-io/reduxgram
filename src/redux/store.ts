import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { logger } from "redux-logger";
import { rootReducer } from "@src/redux/root-reducer";

// new root reducer with router state
const createRootReducerWithRouterState = () => connectRouter(history)(rootReducer);

export const history = createBrowserHistory();
export const store = createStore(
    createRootReducerWithRouterState(),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            reduxThunk,
            logger,
        ),
    ),
);

if (module.hot) {
    module.hot.accept("@src/redux/root-reducer", () => store.replaceReducer(createRootReducerWithRouterState()));
}
