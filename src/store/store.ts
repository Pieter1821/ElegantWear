import { compose, createStore, applyMiddleware , Middleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

export type Rootstate = ReturnType<typeof rootReducer>;

declare global {
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose
  }
}

type ExtendedPersistConfig = PersistConfig<Rootstate> & {
  whitelist: (keyof Rootstate)[];
}

const ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(ExtendedPersistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
