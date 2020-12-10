import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"

export default function configureStore(rootReducer, preloadedState) {

    const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
    const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunkMiddleware)))
    return store
}
