import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from './postSagas';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

const persistConfig = {
    key: "persist-Key",
    storage
}

const rootPersistReducer = persistReducer(persistConfig, rootReducer )


const store = createStore(rootPersistReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);



export default store;
export {persistor}