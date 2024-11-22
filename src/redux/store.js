import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./rootReducer";
import rootSaga from "./saga";

let sagaMiddleware = createSagaMiddleware()

let store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store